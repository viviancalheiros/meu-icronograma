import React, { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import Button from "@/Components/Button";
import { Link, useForm, usePage } from "@inertiajs/react";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import InputError from "@/Components/InputError";

export default function Profile() {

    // const initialName = user?.name;
    // const initialRegistration = user?.registration;

    const { data, setData, post, processing, errors} = useForm({
        name: '',
        registration: '',
        password: '',
    })

    // const isChanged =
    //     data.name != initialName || data.registration != initialRegistration;

    const [ showPassword, setShowPassword] = useState(false);

    const handleSave = (e) => {
        e.preventDefault();
    }

    return (
        <>
            <Header />
            <div className="w-full h-full flex flex-col items-center justify-center font-roboto">
                <div className="w-full h-1/5 flex flex-col items-center justify-center mt-8">
                    <h1 className="text-3xl text-purple-dark font-bold mb-8">PERFIL</h1>
                    <div className="w-full h-1 scale-y-50 bg-purple-dark"></div>
                </div>
                <form 
                className="lg:w-1/4 w-4/5 h-4/5 flex flex-col items-center mt-12 mb-12"
                onSubmit={handleSave}
                >
                    <label className="text-purple-dark font-bold text-lg self-start">
                        NOME</label>
                    <input
                    type="text"
                    value={data.name}
                    onChange={(e) => setData('name', e.target.value)}
                    className="w-full bg-purple-dark rounded-xl text-white
                            focus:outline-none focus:ring-2 focus:ring-purple-light"
                    ></input>
                    <InputError message={errors.name} />
                    <label className="text-purple-dark font-bold text-lg self-start mt-8">
                        MATRÍCULA</label>
                    <input
                    type="text"
                    value={data.registration}
                    onChange={(e) => setData('registration', e.target.value)}
                    className="w-full bg-purple-dark rounded-xl text-white
                            focus:outline-none focus:ring-2 focus:ring-purple-light"
                    ></input>
                    <InputError message={errors.registration} />
                    <label className="text-purple-dark font-bold text-lg self-start mt-8">
                        SENHA</label>
                    <div className="relative w-full">
                        <input
                        type={showPassword ? "text" : "password"}
                        value={data.password}
                        onChange={(e) => setData('password', e.target.value)}
                        className="w-full bg-purple-dark rounded-xl text-white
                                focus:outline-none focus:ring-2 focus:ring-purple-light"
                        ></input>
                        <button
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-white"
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        >
                        {showPassword ? <FiEye />:<FiEyeOff />}
                        </button>
                    </div>
                    <div className="w-full flex lg:flex-row flex-col justify-between items-center mt-12">
                        <Button
                            value={processing ? "SALVANDO..." : "SALVAR"} 
                            className={`text-white 
                                ${processing ? 'bg-gray-400 cursor-not-allowed' : 'bg-purple-dark'}`}
                            // disabled={processing || !isChanged}

                        />
                        <Link href="/login">
                            <Button 
                            value={"DESCONECTAR"} 
                            className="bg-white border border-purple-dark text-purple-dark lg:mt-0 mt-2"
                            />
                        </Link>
                    </div>
                </form>
            </div>
            <Footer />
        </>
    )
}