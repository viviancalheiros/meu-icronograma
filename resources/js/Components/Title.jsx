import React from "react";
import { twMerge } from "tailwind-merge";

export default function Title({
    className = '',
}) {

    const base = 
        "w-full flex flex-col items-center font-roboto text-5xl font-semibold";

    return (
        <>
        <div className={twMerge(base, className)}>
            <p className="text-white">MEU</p>
            <div className="flex flex-row">
                <p className="text-blue">IC</p>
                <p className="text-white">RONOGRAMA</p>
            </div>
        </div>
        </>
    );
}