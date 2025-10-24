import React from 'react';
import { Link, useForm } from '@inertiajs/react';
import LogoUfal from '@/Components/LogoUfal';
import LogoIc from '@/Components/LogoIC';
import Button from '@/Components/Button';
import { IoArrowBack } from "react-icons/io5";
import InputError from '@/Components/InputError';

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
                <div className="lg:w-1/2 w-2/3 h-full flex flex-col items-center justify-center">
                    <p className="w-full text-center text-purple-dark font-semibold text-xl mb-12">
                        Informe o e-mail cadastrado e enviaremos um código para redefinir sua senha.
                    </p>
                    {status && (
                        <div className="mb-4 text-sm font-medium text-green-600">
                            {status}
                        </div>
                    )}
                    <form 
                        className="lg:w-1/2 w-3/4 flex flex-col items-center"
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
                        <InputError message={errors.email} className='text-red' />
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