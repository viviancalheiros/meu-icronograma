import React from "react"
import { twMerge } from "tailwind-merge"

export default function Button({
  children,
  value,
  className = "",
  type = "button",
  onClick,
}) {
  const base =
    "bg-white text-purple-dark rounded-2xl font-semibold text-base px-12 py-3 mb-4 shadow-xl"

  return (
    <button
      type={type}
      onClick={onClick}
      className={twMerge(base, className)}
    >
      {children ?? value}
    </button>
  )
}