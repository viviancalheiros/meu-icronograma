import React from "react";
import { FaCircle } from "react-icons/fa";

export default function Legenda () {

    return (
        <div className="w-full bg-gray-100 border rounded-2xl border-purple-dark shadow-xl p-4 text-purple-dark mt-8 flex flex-col">
            <div className="w-full lg:text-start lg:mb-2 text-center">
                <p className="text-lg font-bold mb-2 text-shadow-sm">Legenda:</p>
            </div>
            <div className="w-full flex flex-col items-center lg:flex-row lg:justify-between">
                <div className="flex flex-row lg:ml-4 mr-3.5 items-center">
                    <FaCircle
                    className="text-green-500 mr-4"
                    />
                    <p className="font-semibold">0 pré-requisitos restantes</p>
                </div>
                <div className="flex flex-row lg:ml-4 items-center">
                    <FaCircle
                    className="text-yellow-500 mr-4"
                    />
                    <p className="font-semibold">Faltam {"<"} 50% pré-requisitos</p>
                </div>
                <div className="flex flex-row lg:ml-4 items-center">
                    <FaCircle
                    className="text-red mr-4"
                    />
                    <p className="font-semibold">Faltam {">"} 50% pré-requisitos</p>
                </div>
            </div>
        </div>
    );
}