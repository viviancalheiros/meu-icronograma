import React, { useState } from 'react';
import { Link, usePage } from '@inertiajs/react';
import { FaUserCircle, FaSignOutAlt, FaBars, FaTimes } from 'react-icons/fa';
import LogoHeader from './Logo-header';


export default function Header() {
    const { url } = usePage();
    const [hoveredItem, setHoveredItem] = useState(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);


    const navItems = [
        { name: 'HOME', href: '/home' },
        { name: 'DISCIPLINAS', href: '/disciplinas' },
        { name: 'ÊNFASES', href: '/enfases' },
        { name: 'HORAS COMPLEMENTARES', href: '/horas-complementares' },
        { name: 'DÚVIDAS', href: '/duvidas' },
    ];


    return (
        <header className="sticky top-0 z-50 bg-[#373f75] text-white shadow-lg">
            <div className="container mx-auto flex h-20 items-center justify-between px-4">
                {/* Logo */}
                <div className="flex items-center">
                <Link href="/home">
                    <LogoHeader className="h-16 w-auto cursor-pointer" />
                </Link>
                </div>


                {/* Links de navegação */}
                <nav className="hidden md:block">
                    <ul className="relative flex space-x-8">
                        {navItems.map((item, index) => (
                            <li
                                key={index}
                                className="relative"
                                onMouseEnter={() => setHoveredItem(index)}
                                onMouseLeave={() => setHoveredItem(null)}
                            >
                                <Link
                                    href={item.href}
                                    className={`
                                        block transform px-4 py-2 transition duration-300 ease-in-out hover:-translate-y-1
                                        ${url.startsWith(item.href) ? 'text-blue-400' : 'hover:text-blue-400'}
                                    `}
                                >
                                    {item.name}
                                </Link>
                                {/* Barra azul sublinhada */}
                                {hoveredItem === index && (
                                    <div className="absolute inset-x-0 bottom-0 h-1 bg-blue-400 transform -translate-y-1 transition-transform duration-300 ease-in-out" />
                                )}
                                {url.startsWith(item.href) && (
                                    <div className="absolute inset-x-0 bottom-0 h-1 bg-blue-400" />
                                )}
                            </li>
                        ))}
                    </ul>
                </nav>


                {/* Ícones do usuário e o botão do menu (responsivo) */}
                <div className="flex items-center space-x-4">
                    <Link href="/profile" className="hidden md:block text-gray-300 hover:text-white transition-colors duration-300">
                        <FaUserCircle size={24} />
                    </Link>
                    <Link href="/logout" method="post" as="button" className="hidden md:block text-gray-300 hover:text-white transition-colors duration-300">
                        <FaSignOutAlt size={24} />
                    </Link>


                    {/* menu móvel */}
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-white focus:outline-none">
                        {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </button>
                </div>


                {/* Menu lateral p telas pequenas */}
                <div className={`fixed inset-y-0 right-0 w-64 bg-[#373f75] p-6 transform transition-transform duration-300 ease-in-out z-50 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                    <div className="flex justify-between items-center mb-6">
                    <Link href="/home" onClick={() => setIsMenuOpen(false)}>
                        <LogoHeader className="h-10 w-auto cursor-pointer" />
                    </Link>
                        <button onClick={() => setIsMenuOpen(false)} className="text-white focus:outline-none">
                            <FaTimes size={24} />
                        </button>
                    </div>
                    <ul className="space-y-4">
                        {navItems.map((item, index) => (
                            <li key={index}>
                                <Link
                                    href={item.href}
                                    onClick={() => setIsMenuOpen(false)}
                                    className={`block py-2 text-xl font-bold ${url.startsWith(item.href) ? 'text-blue-400' : 'hover:text-blue-400'}`}
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <div className="flex justify-center space-x-6 mt-8">
                        <Link href="/profile" onClick={() => setIsMenuOpen(false)} className="text-gray-300 hover:text-white transition-colors duration-300">
                            <FaUserCircle size={28} />
                        </Link>
                        <Link href="/logout" method="post" as="button" onClick={() => setIsMenuOpen(false)} className="text-gray-300 hover:text-white transition-colors duration-300">
                            <FaSignOutAlt size={28} />
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}
