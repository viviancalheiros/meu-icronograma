import React, { useEffect, useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import Button from "@/Components/Button";
import { Link, useForm, usePage } from "@inertiajs/react";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import InputError from "@/Components/InputError";

export default function Perfil() {
    const { props } = usePage();
    const { user, status } = props;

    const { data, setData, patch, processing, errors, reset, recentlySuccessful} = useForm({
        name: user?.name,
        registration: user?.registration,
        password: '',
    });

    const [ showPassword, setShowPassword] = useState(false);

    useEffect(() => {
        if (user) {
            setData({
                name: user.name || '',
                registration: user.registration || '',
                password: '',
            });
        }
    }, [user]);

    const isChanged =
        data.name !== user?.name ||
        data.registration !== user?.registration ||
        data.password !== '';

    useEffect(() => {
        if (recentlySuccessful) {
            reset('password');
            setShowPassword(false);
        }
    }, [recentlySuccessful, reset]);

    const handleSave = (e) => {
        e.preventDefault();
        patch(route('profile.update'), {
            preserveScroll: true,
            onSuccess: () => {
                setData('password', '');
            }
        });
    }

    return (
        <div className="bg-gray-100 min-h-screen flex flex-col">
            <Header />
            <div className="w-fullh-full flex flex-col items-center justify-center font-roboto">
                <div className="w-full flex flex-col items-center justify-center mt-12">
                    <h1 className="text-3xl text-purple-dark font-bold mb-8">PERFIL</h1>
                    <div className="w-full h-1 scale-y-50 bg-purple-dark"></div>
                </div>

                {/* Mensagens de feedback */}
                {(status || recentlySuccessful) && (
                    <div className="mt-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                        {status || 'Perfil atualizado com sucesso!'}
                    </div>
                )}
               
                <form
                className="lg:w-1/4 md:w-1/2 w-4/5 h-4/5 flex flex-col items-center mt-16 mb-12"
                onSubmit={handleSave}
                >
                    <label className="text-purple-dark font-bold text-lg self-start">
                        NOME
                    </label>
                    <input
                    type="text"
                    // Vincula a chave 'name'
                    value={data.name}
                    onChange={(e) => setData('name', e.target.value)}
                    className="w-full bg-purple-dark rounded-xl text-white
                            focus:outline-none focus:ring-2 focus:ring-purple-light p-2 mt-1"
                    />
                    <InputError message={errors.name} /> {/* Exibe erro para 'name' */}
                   
                    <label className="text-purple-dark font-bold text-lg self-start mt-8">
                        MATRÍCULA</label>
                    <input
                    type="text"
                    // Vincula a chave 'registration'
                    value={data.registration}
                    onChange={(e) => setData('registration', e.target.value)}
                    className="w-full bg-purple-dark rounded-xl text-white
                            focus:outline-none focus:ring-2 focus:ring-purple-light p-2 mt-1"
                    />
                    <InputError message={errors.registration} /> {/* Exibe erro para 'registration' */}
                   
                    <label className="text-purple-dark font-bold text-lg self-start mt-8">
                        SENHA (Preencha para alterar)</label>
                    <div className="relative w-full">
                        <input
                        type={showPassword ? "text" : "password"}
                        // Vincula a chave 'password'
                        value={data.password}
                        onChange={(e) => setData('password', e.target.value)}
                        className="w-full bg-purple-dark rounded-xl text-white
                                focus:outline-none focus:ring-2 focus:ring-purple-light p-2 mt-1"
                        />
                        <button
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-white"
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        >
                        {showPassword ? <FiEye /> : <FiEyeOff />}
                        </button>
                    </div>
                    <InputError message={errors.password} /> {/* Exibe erro para 'password' */}

                    <div className="w-full flex lg:flex-row flex-col justify-between items-center mt-12 space-y-4 lg:space-y-0">
                        <Button
                            type="submit"
                            value={processing ? "SALVANDO..." : "SALVAR"}
                            className={`text-white w-full lg:w-auto
                                ${processing || !isChanged ? 'bg-gray-400 cursor-not-allowed' : 'bg-purple-dark hover:bg-purple-light'}`}
                            disabled={processing || !isChanged}
                        />
                        <Link
                            href={route('logout')}
                            method="post"
                            as="button"
                            className="w-full lg:w-auto"
                        >
                            <Button
                            value={"DESCONECTAR"}
                            className="bg-white border border-purple-dark text-purple-dark hover:bg-purple-light hover:text-white transition w-full"
                            type="button"
                            />
                        </Link>
                    </div>
                </form>
            </div>
            <Footer />
        </div>
    )
}