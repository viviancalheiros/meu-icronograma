import React, { useState, useRef, useEffect } from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import LogoUfal from '@/Components/LogoUfal';
import LogoIc from '@/Components/LogoIC';
import Button from '@/Components/Button';
import { IoArrowBack } from "react-icons/io5";
import InputError from '@/Components/InputError';

const OtpInput = ({ length, value, onChange }) => {
    const inputRefs = useRef([]);

    useEffect(() => {
        inputRefs.current[0]?.focus();
    }, []);

    const handleChange = (e, index) => {
        const newValue = e.target.value;
        if (!/^[0-9]$/.test(newValue) && newValue !== '') return;
        const newOtp = [...value];
        newOtp[index] = newValue;
        onChange(newOtp);
        if (newValue !== '' && index < length - 1) {
            inputRefs.current[index + 1]?.focus();
        }
    };

    const handleKeyDown = (e, index) => {
        if (e.key === 'Backspace' && value[index] === '' && index > 0) {
            inputRefs.current[index - 1]?.focus();
        }
    };

    return (
        <div className="flex justify-center gap-2 md:gap-4">
            {Array.from({ length }, (_, index) => (
                <input
                    key={index}
                    ref={(el) => (inputRefs.current[index] = el)}
                    type="text"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    maxLength="1"
                    value={value[index]}
                    onChange={(e) => handleChange(e, index)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    className="w-14 h-14 bg-purple-dark text-white border-2 border-purple-dark rounded-lg text-3xl text-center focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
            ))}
        </div>
    );
};

const EnterCodeStep = ({ form, setStep, processing }) => {
    const handleNextStep = () => {
        setStep('resetPassword');
    };

    return (
        <div className="w-full h-full px-4 sm:px-6 lg:px-8 py-8 text-center font-roboto">
            <p className="text-purple-dark text-xl lg:text-2xl mb-12 mt-8 font-medium">
                Insira o código enviado para o seu email:
            </p>
            <OtpInput 
                length={6} 
                value={form.data.token} 
                onChange={(token) => form.setData('token', token)} 
            />
            <InputError message={form.errors.token} className='mt-2' />
            <div className="flex items-center justify-center mt-10">
                <Button
                    type="button"
                    onClick={handleNextStep}
                    value={'CONTINUAR'}
                    className='bg-purple-dark text-white w-1/3 mt-8 font-medium lg:text-xl'
                />
            </div>
            <Link 
                className='w-full flex flex-row justify-center items-center gap-2 text-purple-dark mt-2 font-medium'
                href={route('login')}
            >
                <IoArrowBack />
                Voltar para o login
            </Link>
        </div>
    );
};

const ResetPasswordStep = ({ form, processing }) => {
    const submit = (e) => {
        e.preventDefault();
        form.post(route('password.store'));
    }

    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center font-roboto">
            <p className="text-purple-dark text-xl mb-12 mt-4 font-medium">
                Digite a nova senha:
            </p>
            <form onSubmit={submit} className="max-w-xl mx-auto space-y-6">
                <input
                    type="password"
                    name="password"
                    placeholder="Nova senha"
                    value={form.data.password}
                    onChange={(e) => form.setData('password', e.target.value)}
                    className="w-2/3 bg-purple-dark text-white placeholder-gray-300 border-none rounded-lg h-14 px-6 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <InputError message={form.errors.password} />
                <input
                    type="password"
                    name="password_confirmation"
                    placeholder="Repetir senha"
                    value={form.data.password_confirmation}
                    onChange={(e) => form.setData('password_confirmation', e.target.value)}
                    className="w-2/3 bg-purple-dark text-white placeholder-gray-300 border-none rounded-lg h-14 px-6 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <div className="flex items-center justify-center pt-4">
                    <Button
                        type="submit"
                        value={processing ? 'SALVANDO...' : 'SALVAR'}
                        className='bg-purple-dark text-white w-1/3 mt-8 font-medium lg:text-xl'
                        disabled={processing}
                    />
                </div>
            </form>
            <Link 
                className='w-full flex flex-row justify-center items-center gap-2 text-purple-dark mt-2'
                href={route('login')}
            >
                <IoArrowBack />
                Voltar para o login
            </Link>
        </div>
    );
};

export default function ForgotPassword({ status }) {
     const { data, setData, post, processing, errors } = useForm({
        email: '',
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('password.email'));
    };

    return (
        <div className="h-screen w-screen flex flex-col font-roboto bg-purple-dark">
            <div className="w-full h-1/5 gap-4 flex flex-row items-center justify-center">
                <LogoUfal width={45} height={97} />
                <LogoIc width={90} height={90} />
            </div>
            <div className="w-full h-4/5 flex flex-col items-center bg-gray-100 rounded-t-2xl">
                <h1 className="text-3xl font-bold text-purple-dark p-12">RECUPERAÇÃO DE SENHA</h1>
                <div className="h-0.5 w-full bg-purple-dark"></div>
                <div className="w-1/2 h-full flex flex-col items-center justify-center">
                    <p className="w-1/2 text-center text-purple-dark font-semibold text-xl mb-12">
                        Informe o e-mail cadastrado e enviaremos um código para redefinir sua senha.
                    </p>
                    {status && (
                        <div className="mb-4 text-sm font-medium text-green-600">
                            {status}
                        </div>
                    )}
                    <form 
                        className="w-1/2 flex flex-col items-center"
                        onSubmit={submit}    
                    >
                        <input
                        id="email"
                        type="text"
                        name="email"
                        placeholder="E-mail"
                        value={data.email}
                        onChange={(e) => setData('email', e.target.value)}
                        className='w-full bg-purple-dark text-white placeholder-gray-300 border-none 
                        rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 h-12 mb-12
                        shadow-xl'
                        ></input>
                        <InputError message={errors.email} />
                        <Button
                            type="submit"
                            value={processing ? 'ENVIANDO...' : 'ENVIAR'}
                            className='bg-purple-dark w-3/5 text-white mt-8 font-medium lg:text-xl'
                            disabled={processing}
                        />
                    </form>
                    <Link 
                        className='w-full flex flex-row justify-center items-center gap-2 font-semibold text-purple-dark mt-2'
                        href={route('login')}
                    >
                        <IoArrowBack />
                        Voltar para o login
                    </Link>
                </div>
            </div>
        </div>
    );
};