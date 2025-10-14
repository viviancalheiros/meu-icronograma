import { Link } from '@inertiajs/react';
import Title from '@/Components/Title';
import Button from '@/Components/Button';
import LogoUfal from '@/Components/LogoUfal';
import LogoIc from '@/Components/LogoIC';
import InputError from '@/Components/InputError';
import { useForm } from '@inertiajs/react';

export default function Cadastro () {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        registration: '', // matrícula
        password: '',
        password_confirmation: '',
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('cadastro.store'), {
            onSuccess: () => {
                reset('password', 'password_confirmation');
            },
            onError: () => {
                reset('password', 'password_confirmation');
            },
        });
    };

    return (
        <div className='w-full min-h-screen flex font-roboto'>
            <div className='hidden lg:block bg-purple-dark w-1/2 min-h-screen flex flex-col items-center'>
                <div className='w-full h-3/6 flex flex-row pt-4 justify-center'>
                    <LogoUfal width={35} height={76} className="ml-8" />
                    <LogoIc width={80} height={80} className="ml-4" />
                </div>
                <div className='w-full h-3/6 flex flex-row'>
                    <Title />
                </div>
            </div>
            
            <div className='lg:bg-white bg-purple-dark lg:w-1/2 w-full min-h-screen flex flex-col items-center justify-center py-4'>
                <div className='lg:hidden w-full flex flex-row pt-4 justify-center'>
                    <LogoUfal width={35} height={76} className="ml-8" />
                    <LogoIc width={80} height={80} className="ml-4" />
                </div>
                <Title className='lg:hidden text-2xl mt-6 mb-6' />
                
                <div className='lg:bg-purple-dark bg-white lg:w-1/2 w-4/5 flex flex-col items-center rounded-xl shadow-lg border border-purple-light'>
                    <p className='text-2xl lg:text-white text-purple-dark font-semibold m-8'>CADASTRE-SE</p>
                    
                    <form
                        className='flex flex-col items-center w-4/6'
                        onSubmit={submit}
                    >
                        {/* Nome */}
                        <div className='w-full mb-3'>
                            <input
                                type='text'
                                placeholder='Nome'
                                value={data.name}
                                onChange={e => setData('name', e.target.value)}
                                className='lg:bg-white lg:text-purple-dark text-white bg-purple-dark h-12 pl-4 mb-1 rounded-2xl text-sm w-full
                                lg:placeholder:text-purple-dark placeholder:text-white border border-gray-300 focus:border-purple-500 focus:outline-none'
                            />
                            <InputError message={errors.name} className="mt-1 text-red-500 text-xs" />
                        </div>
                        
                        {/* Email */}
                        <div className='w-full mb-3'>
                            <input
                                type='email'
                                placeholder='E-mail'
                                value={data.email}
                                onChange={e => setData('email', e.target.value)}
                                className='lg:bg-white lg:text-purple-dark text-white bg-purple-dark h-12 pl-4 mb-1 rounded-2xl text-sm w-full
                                lg:placeholder:text-purple-dark placeholder:text-white border border-gray-300 focus:border-purple-500 focus:outline-none'
                            />
                            <InputError message={errors.email} className="mt-1 text-red-500 text-xs" />
                        </div>
                        
                        {/* Matrícula */}
                        <div className='w-full mb-3'>
                            <input
                                type='text'
                                placeholder='Matrícula'
                                value={data.registration}
                                onChange={e => setData('registration', e.target.value)}
                                className='lg:bg-white lg:text-purple-dark text-white bg-purple-dark h-12 pl-4 mb-1 rounded-2xl text-sm w-full
                                lg:placeholder:text-purple-dark placeholder:text-white border border-gray-300 focus:border-purple-500 focus:outline-none'
                            />
                            <InputError message={errors.registration} className="mt-1 text-red-500 text-xs" />
                        </div>
                        
                        {/* Senha */}
                        <div className='w-full mb-3'>
                            <input
                                type='password'
                                placeholder='Senha'
                                value={data.password}
                                onChange={e => setData('password', e.target.value)}
                                className='lg:bg-white lg:text-purple-dark text-white bg-purple-dark h-12 pl-4 mb-1 rounded-2xl text-sm w-full
                                lg:placeholder:text-purple-dark placeholder:text-white border border-gray-300 focus:border-purple-500 focus:outline-none'
                            />
                            <InputError message={errors.password} className="mt-1 text-red-500 text-xs" />
                        </div>
                        
                        {/* confirmar Senha */}
                        <div className='w-full mb-4'>
                            <input
                                type='password'
                                placeholder='Confirmar Senha'
                                value={data.password_confirmation}
                                onChange={e => setData('password_confirmation', e.target.value)}
                                className='lg:bg-white lg:text-purple-dark text-white bg-purple-dark h-12 pl-4 rounded-2xl text-sm w-full
                                lg:placeholder:text-purple-dark placeholder:text-white border border-gray-300 focus:border-purple-500 focus:outline-none'
                            />
                            <InputError message={errors.password_confirmation} className="mt-1 text-red-500 text-xs" />
                        </div>
                        
                        <Button
                            type="submit"
                            value={'CADASTRAR'}
                            className='mt-4 lg:bg-white bg-purple-dark lg:text-purple-dark text-white'
                            disabled={processing}
                        />
                    </form>
                    
                    <Link 
                        href={route('login')} 
                        className='lg:text-white text-purple-dark mb-6 text-sm hover:underline'
                    >
                        Já tem uma conta? Faça login
                    </Link>
                </div>
            </div>
        </div>
    );
}