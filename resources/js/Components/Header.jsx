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
        { name: 'DISCIPLINAS', 
        href: '/obrigatorias',
        submenu: [
            { name: 'Eletivas', href: '/eletivas' },
            { name: 'Obrigatórias', href: '/obrigatorias' }
        ]
        },
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
                className="relative group inline-block px-4 py-2"
                onMouseEnter={() => setHoveredItem(index)}
                onMouseLeave={() => setHoveredItem(null)}
            >
                <Link
                href={item.href}
                className={`
                    relative block transition duration-300 ease-in-out hover:-translate-y-1
                    ${url.startsWith(item.href) ? 'text-blue-400' : 'hover:text-blue-400'}
                `}
                >
                {item.name}
                <span
                    className={`
                    absolute left-0 bottom-0 h-[2px] bg-white w-full                
                    origin-right scale-x-0 transition-transform duration-500 ease-in-out
                    group-hover:origin-left group-hover:scale-x-100
                    ${url.startsWith(item.href) ? 'origin-left scale-x-100' : ''}
                    `}
                />
                </Link>
                {item.submenu && hoveredItem === index && (
                <ul className="absolute left-0 mt-2 w-48 bg-[#373f75] text-white rounded-lg shadow-lg py-2 pointer-events-auto transition-opacity duration-150 opacity-100 z-50">
                    {item.submenu.map((sub, subIdx) => (
                    <li key={subIdx}>
                        <Link
                        href={sub.href}
                        className="block px-4 py-2 hover:bg-blue-300 text-white rounded transform transition-transform duration-300 hover:-translate-y-1"
                        >
                        {sub.name}
                        </Link>
                    </li>
                    ))}
                </ul>
                )}
            </li>
            ))}
        </ul>
        </nav>



                {/* Ícones do usuário e o botão do menu (responsivo) */}
                <div className="flex items-center space-x-4">
                    <Link href="/perfil" className="hidden md:block text-gray-300 hover:text-white transition-colors duration-300">
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
                        <Link href="/perfil" onClick={() => setIsMenuOpen(false)} className="text-gray-300 hover:text-white transition-colors duration-300">
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
