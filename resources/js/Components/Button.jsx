import React from "react"

export default function Button({value}) {
    return (
        <>
        <button type='submit'
            className='bg-white text-purple-dark rounded-2xl font-semibold text-base p-12 pt-3 pb-3 mb-4 shadow-xl'>
            {value}
        </button>
        </>
    );
}