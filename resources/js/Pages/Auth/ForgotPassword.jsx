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

const EnterEmailStep = ({ form, processing }) => {
    const submit = (e) => {
        e.preventDefault();
        form.post(route('password.email'));
    };

    return (
        <div className="w-screen h-full flex flex-col items-center px-4 sm:px-6 lg:px-8 pt-8 text-center font-roboto">
            <form onSubmit={submit} className="w-2/3">
                <p className='text-purple-dark text-xl w-full font-medium mt-8'>
                    Enviaremos um código e as instruções para recuperação de senha.
                </p>
                <div className="mb-4 mt-8">
                    <label htmlFor="email" className="text-purple-dark text-xl font-medium">
                        Digite seu email:
                    </label>
                </div>
                <input
                    id="email"
                    type="email"
                    value={form.data.email}
                    placeholder="E-mail"
                    className="w-full bg-purple-dark text-white placeholder-gray-300 border-none rounded-lg h-14 px-6 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-75"
                    onChange={(e) => form.setData('email', e.target.value)}
                    autoFocus
                />
                <InputError message={form.errors.email} className='mt-2 text-left' />
                <div className="flex flex-col items-center justify-center mt-12">
                    <Button
                        type="submit"
                        value={processing? 'ENVIANDO...' : 'ENVIAR'}
                        className='bg-purple-dark text-white font-medium w-1/3'
                        disabled={processing}
                    />
                </div>
            </form>
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

export default function ForgotPassword() {
    const [step, setStep] = useState('enterEmail');

    const { data, setData, post, processing, errors, reset} = useForm({
        email: '',
        token: Array(6).fill(''),
        password: '',
        password_confirmation: '',
    });

    const formProps = { form: 
        { data, setData, post, processing, errors, reset }, 
        processing };

    const handleEmailSubmit = () => {
        post(route('password.email'), {
            onSuccess: () => {
                setStep('enterCode');
            },
        });
    };

    const handleFinalSubmit = () => {
        post(route('password.store'), {
            onSuccess: () => {

            },
            onError: () => {
                reset('password', 'password_confirmation');
            },
        });
    };

    const renderContent = () => {
        switch (step) {
            case 'enterCode':
                return <EnterCodeStep form={{ data, setData, errors, processing, post, reset }} setStep={setStep} />;
            case 'resetPassword':
                return <ResetPasswordStep form={{ data, setData, post: handleFinalSubmit, errors, processing }} />;
            case 'enterEmail':
            default:
                return <EnterEmailStep form={{ data, setData, post: handleEmailSubmit, errors, processing }} />;
        }
    };

    return (
        <div className="min-h-screen bg-white">
            <Head title="Recuperação de Senha" />
            <div>
                <div className="bg-purple-dark p-1 flex flex-col items-center justify-center gap-4">
                    <div className="flex items-center gap-4 mb-8">
                        <LogoUfal width={35} height={76} className="ml-8" />
                        <LogoIc width={80} height={80} className="ml-4" />
                    </div>
                </div>
                <div className="text-center">
                    <h1 className="text-purple-dark text-3xl font-roboto uppercase mt-4 font-semibold">
                        Recuperação de Senha
                    </h1>
                </div>
                <div className="mt-4">
                    <div className="w-full border-b border-purple-dark"></div>
                </div>
                {status && <div className="mb-4 font-medium text-sm text-green-600 text-center">{status}</div>}
                <div className='w-full flex flex-col items-center'>
                    {renderContent()}
                     <Link 
                        className='flex flex-row items-center gap-2 text-purple-dark font-roboto font-medium'
                        href={route('login')}
                    >
                        <IoArrowBack />
                        Voltar para o login
                    </Link>
                </div>
            </div>
        </div>
    );
}