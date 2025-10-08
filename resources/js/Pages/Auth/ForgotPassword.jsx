import React, { useState, useRef, useEffect } from 'react';
import { Head, router } from '@inertiajs/react';
import LogoUfal from '@/Components/LogoUfal';
import LogoIc from '@/Components/LogoIC';

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
                    className="w-12 h-16 md:w-16 md:h-20 bg-purple-dark text-white border-2 border-purple-dark rounded-lg text-3xl text-center focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
            ))}
        </div>
    );
};

const EnterEmailStep = ({ onEmailSubmit, email, setEmail }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        onEmailSubmit();
    };

    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center font-roboto">
            <p className="text-purple-dark text-2xl mb-12 font-medium">
                Digite seu email no espaço a seguir. Enviaremos um código e as instruções para recuperação de senha.
            </p>
            <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
                <div className="text-left mb-3">
                    <label htmlFor="email" className="text-purple-dark text-2xl font-medium">
                        Digite seu email:
                    </label>
                </div>
                <input
                    id="email"
                    type="email"
                    name="email"
                    value={email}
                    placeholder="E-mail"
                    className="w-full bg-purple-dark text-white placeholder-gray-300 border-none rounded-lg h-16 px-6 text-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-75"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    autoFocus
                />
                <div className="flex items-center justify-center mt-10">
                    <button type="submit" className="w-60 bg-purple-dark text-white Roboto-bold py-4 px-4 rounded-lg uppercase text-lg hover:bg-opacity-90 transition ease-in-out duration-150">
                        Enviar
                    </button>
                </div>
            </form>
        </div>
    );
};

const EnterCodeStep = ({ email, onCodeSubmit }) => {
    const [otp, setOtp] = useState(new Array(6).fill(''));

    const handleSubmit = (e) => {
        e.preventDefault();
        const finalCode = otp.join('');
        if (finalCode.length < 6) {
            alert('Por favor, insira os 6 dígitos do código.');
            return;
        }
        console.log('Código inserido:', finalCode);
        onCodeSubmit();
    };

    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center font-roboto">
            <p className="text-purple-dark text-2xl mb-12 font-medium">
                Insira o código que foi enviado para seu email: <span className="font-normal">{email}</span>
            </p>
            <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
                <OtpInput length={6} value={otp} onChange={setOtp} />
                <div className="flex items-center justify-center mt-10">
                    <button type="submit" className="w-60 bg-purple-dark text-white Roboto-bold py-4 px-4 rounded-lg uppercase text-lg hover:bg-opacity-90 transition ease-in-out duration-150">
                        Entrar
                    </button>
                </div>
            </form>
        </div>
    );
};

const ResetPasswordStep = ({ onPasswordReset }) => {
    const [passwords, setPasswords] = useState({ password: '', password_confirmation: '' });

    const handleChange = (e) => {
        setPasswords({ ...passwords, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!passwords.password || !passwords.password_confirmation) {
            alert('Por favor, preencha os dois campos de senha.');
            return;
        }
        if (passwords.password !== passwords.password_confirmation) {
            alert('As senhas não coincidem!');
            return;
        }
        console.log('Nova senha definida:', passwords.password);
        onPasswordReset();
    };

    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center font-roboto">
            <p className="text-purple-dark text-2xl mb-12 font-medium">
                Digite a nova senha:
            </p>
            <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-6">
                <input
                    type="password"
                    name="password"
                    placeholder="Nova senha"
                    value={passwords.password}
                    onChange={handleChange}
                    className="w-full text-sm bg-purple-dark text-white placeholder-gray-300 border-none rounded-lg h-16 px-6 text-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
                    required
                />
                <input
                    type="password"
                    name="password_confirmation"
                    placeholder="Repetir senha"
                    value={passwords.password_confirmation}
                    onChange={handleChange}
                    className="w-full bg-purple-dark text-white placeholder-gray-300 border-none rounded-lg h-16 px-6 text-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
                    required
                />
                <div className="flex items-center justify-center pt-4">
                    <button type="submit" className="w-60 bg-purple-dark text-white Roboto-bold py-4 px-4 rounded-lg uppercase text-lg hover:bg-opacity-90 transition ease-in-out duration-150">
                        Entrar
                    </button>
                </div>
            </form>
        </div>
    );
};

export default function ForgotPassword() {
    const [step, setStep] = useState('enterEmail');
    const [email, setEmail] = useState('');

    const handleEmailSubmit = () => {
        console.log('E-mail enviado:', email);
        setStep('enterCode');
    };

    const handleCodeSubmit = () => {
        setStep('resetPassword');
    };

    const handlePasswordReset = () => {
        alert('Senha alterada com sucesso! Você será redirecionado para o login.');
        router.get(route('login'));
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
                    <h1 className="text-purple-dark text-3xl Roboto-bold uppercase tracking-wider mt-4 font-black">
                        Recuperação de Senha
                    </h1>
                </div>
                <div className="mt-4">
                    <div className="w-full border-b border-purple-dark"></div>
                </div>
                {step === 'enterEmail' && <EnterEmailStep onEmailSubmit={handleEmailSubmit} email={email} setEmail={setEmail} />}
                {step === 'enterCode' && <EnterCodeStep email={email} onCodeSubmit={handleCodeSubmit} />}
                {step === 'resetPassword' && <ResetPasswordStep onPasswordReset={handlePasswordReset} />}
            </div>
        </div>
    );
}