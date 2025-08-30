import React from "react";
import { FiEdit } from "react-icons/fi";
import { FaCircle } from "react-icons/fa";

export default function DisciplineBox ({name, status}) {
    const statusColors = {
        yes: "text-green-500",
        no: "text-red",
        maybe: "text-yellow-500",
    };

    const color = statusColors[status] || "text-gray-400";

    return (
        <div className="w-full h-28 bg-purple-dark p-4 rounded-2xl flex flex-col items-center justify-center">
            <div className="w-full h-1/3 mb-3 flex flex-row justify-between items-center">
                <FaCircle className={`${color} text-sm`} />
                <FiEdit className="text-white cursor-pointer" />
            </div>
            <h3 className="w-full h-2/3 text-white font-medium text-sm text-center">
                {name}
            </h3>
        </div>
    )
};