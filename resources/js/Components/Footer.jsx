import React from 'react';

const Footer = () => {
    const developers = [ 
        {   name: 'Jacqueline Barbosa', 
            topics: ['jmbls@ic.ufal.br', '/in/jacquebarbosal96'] 
        },
        {   name: 'José Wender Ferreira Duarte', 
            topics: ['jwfd@ic.ufal.br', '/in/usuario'] 
        },
        {   name: 'Leila Maria Biggi de Souza Cavalcante', 
            topics: ['lmbsc@ic.ufal.br', '/in/leilabiggi'] 
        },
        {   name: 'Vivian Gabriele Calheiros Esmeraldo', 
            topics: ['vgce@ic.ufal.br', '/in/usuario'] 
        },
        {   name: 'Yuck Arthur', 
            topics: ['yafs@ic.ufal.br', '/in/usuario'] 
        }
    ];

    return (
        <footer className="text-white p-4 mt-auto w-full" style={{ backgroundColor: '#373f75' }}>
            <div className="max-w-7xl mx-auto">
                {/* Conteúdo lado a lado */}
                <div className="flex flex-col lg:flex-row justify-between gap-6 mb-3">
                    {/* meu icronograma- centralizado */}
                    <div className="lg:w-1/4 text-center lg:text-left flex flex-col justify-center items-center lg:items-start">
                        <h2 className="text-lg font-bold mb-1">Meu ICronograma</h2>
                        <p className="text-xs text-gray-200">Sistema feito como projeto da disciplina Programação 3</p>
                    </div>
                    
                    {/* dev com topicos */}
                    <div className="lg:w-3/4">
                        <h3 className="font-semibold text-sm mb-3 border-b border-gray-500 pb-1 text-center">DESENVOLVEDORES</h3>
                        
                        {/* scroll horizontal para mobile */}
                        <div className="lg:hidden overflow-x-auto pb-2">
                            <div className="flex space-x-3 min-w-max">
                                {developers.map((developer, index) => (
                                    <div key={index} className="bg-gray-700 bg-opacity-30 p-2 rounded min-w-[180px]">
                                        <div className="flex items-center mb-1">
                                            <span className="text-lg mr-1">•</span> 
                                            <span className="font-medium">{developer.name}</span>
                                        </div>
                                        
                                        <div className="ml-4 mt-1 space-y-1">
                                            {/* icone de email */}
                                            <div className="flex items-center text-gray-300">
                                                <svg className="w-3 h-3 mr-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                                                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                                                </svg>
                                                <span className="text-xs break-all">{developer.topics[0]}</span>
                                            </div>
                                            
                                            {/* icone do linkedin */}
                                            <div className="flex items-center text-gray-300">
                                                <svg className="w-3 h-3 mr-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd"/>
                                                </svg>
                                                <span className="text-xs break-all">{developer.topics[1]}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Grid normal para desktop */}
                        <div className="hidden lg:grid grid-cols-5 gap-3 text-xs">
                            {developers.map((developer, index) => (
                                <div key={index} className="bg-gray-700 bg-opacity-30 p-2 rounded">
                                    <div className="flex items-center mb-1">
                                        <span className="text-lg mr-1">•</span> 
                                        <span className="font-medium">{developer.name}</span>
                                    </div>
                                    
                                    <div className="ml-4 mt-1 space-y-1">
                                        {/* icone de email */}
                                        <div className="flex items-center text-gray-300">
                                            <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                                            </svg>
                                            {developer.topics[0]}
                                        </div>
                                        
                                        {/* icone do linkedin */}
                                        <div className="flex items-center text-gray-300">
                                            <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd"/>
                                            </svg>
                                            {developer.topics[1]}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                
            </div>
        </footer>
    );
};

export default Footer;