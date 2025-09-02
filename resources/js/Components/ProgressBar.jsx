import React from "react";

export default function ProgressBar ({progress}) {
    return (
        <>
            <div className="w-4/5 h-7 bg-white border-2 border-purple-dark rounded-2xl flex flex-col justify-center overflow-hidden p-1">
                <div className="bg-purple-dark h-full rounded-full"
                    style={{ width: `${progress}%` }}>
                </div>
            </div>
        </>
    );
}