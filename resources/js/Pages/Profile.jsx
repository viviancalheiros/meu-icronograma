import React, { use, useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import Button from "@/Components/Button";
import { Link, usePage } from "@inertiajs/react";
import Header from "@/Components/Header";

export default function Profile() {
    const props = usePage();
    const { user } = props;

    const [ name, setName ] = useState(user?.name);
    const [ password, setPassword ] = useState(user?.password);
    const [ enrollment, setEnrollment ] = useState("");
    const [ showPassword, setShowPassword] = useState(false);

    const handleSave = (e) => {
        e.preventDefault();
    }

    return (
        <>
            <Header />
            <div className="w-full h-screen flex flex-col items-center justify-center font-roboto">
                <div className="w-full h-1/5 flex flex-col items-center justify-center">
                    <h1 className="text-3xl text-purple-dark font-bold mb-8">PERFIL</h1>
                    <div className="w-full h-1 scale-y-50 bg-purple-dark"></div>
                </div>
                <form className="lg:w-1/4 w-4/5 h-4/5 flex flex-col items-center mt-16">
                    <label className="text-purple-dark font-bold text-lg self-start">
                        NOME</label>
                    <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-purple-dark rounded-xl text-white
                            focus:outline-none focus:ring-2 focus:ring-purple-light"
                    ></input>
                    <label className="text-purple-dark font-bold text-lg self-start mt-8">
                        MATRÍCULA</label>
                    <input
                    type="text"
                    value={enrollment}
                    onChange={(e) => setEnrollment(e.target.value)}
                    className="w-full bg-purple-dark rounded-xl text-white
                            focus:outline-none focus:ring-2 focus:ring-purple-light"
                    ></input>
                    <label className="text-purple-dark font-bold text-lg self-start mt-8">
                        SENHA</label>
                    <div className="relative w-full">
                        <input
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
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
                        <Link href='/home'>
                            <Button 
                            value={"SALVAR"} 
                            className="bg-purple-dark text-white"
                            />
                        </Link>
                        <Link href="/login">
                            <Button 
                            value={"DESCONECTAR"} 
                            className="bg-white border border-purple-dark text-purple-dark lg:mt-0 mt-2"
                            />
                        </Link>
                        
                    </div>
                </form>    
            </div>
        </>
    )
}