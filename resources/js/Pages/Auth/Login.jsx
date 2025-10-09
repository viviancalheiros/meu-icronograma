import { Link, useForm } from '@inertiajs/react';
import Title from '@/Components/Title';
import Button from '@/Components/Button';
import LogoUfal from '@/Components/LogoUfal';
import LogoIc from '@/Components/LogoIC';
import { useState } from 'react';
import InputError from '@/Components/InputError';
import { FiEye, FiEyeOff } from 'react-icons/fi';

export default function Login() {
    const {data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
    })

    const [ showPassword, setShowPassword ] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('login.store'), {
            onFinish: () => reset('password')
        })
    };

    return (
       <div className='w-full h-screen flex font-roboto'>
        <div className='hidden lg:block bg-purple-dark w-1/2 h-full flex flex-col items-center'>
            <div className='w-full h-3/6 flex flex-row pt-4 justify-center'>
                <LogoUfal width={35} height={76} className="ml-8" />
                <LogoIc width={80} height={80} className="ml-4" />
            </div>
            <div className='w-full h-3/6 flex flex-row'>
                <Title />
            </div>
        </div>
        <div className='lg:bg-white bg-purple-dark lg:w-1/2 w-full h-full flex flex-col items-center lg:justify-center'>
                <div className='lg:hidden w-full flex flex-row pt-4 justify-center'>
                    <LogoUfal width={35} height={76} className="ml-8" />
                    <LogoIc width={80} height={80} className="ml-4" />
                </div>
                <Title className='lg:hidden text-3xl mt-4 mb-8' />
            <div className='lg:bg-purple-dark bg-white lg:w-3/6 w-5/6 flex flex-col items-center rounded-2xl shadow-2xl'>
                <p className='text-2xl lg:text-white text-purple-dark font-semibold m-8 lg:mb-16'>LOGIN</p>
                <form 
                    className='flex flex-col items-center w-4/6'
                    onSubmit={handleSubmit}
                >
                    <input 
                        type="text"
                        placeholder='E-mail' 
                        required
                        value={data.email}
                        onChange={e => setData('email', e.target.value)}
                        className='lg:bg-white text-white lg:text-purple-dark mb-4 bg-purple-dark h-12 pl-4 rounded-2xl text-sm w-full 
                        lg:placeholder:text-purple-dark placeholder:text-white'
                    ></input>
                    <InputError 
                    message={errors.email}
                    className='-mt-2 mb-2 text-red self-start'
                    />
                    <div className='relative w-full'>
                        <input 
                            type={showPassword ? "text" : "password"}
                            placeholder='Senha'
                            required
                            value={data.password}
                            onChange={e => setData('password', e.target.value)}
                            className='lg:bg-white text-white lg:text-purple-dark bg-purple-dark h-12 pl-4 rounded-2xl text-sm w-full 
                            lg:placeholder:text-purple-dark placeholder:text-white'
                            ></input>
                        <button
                            type='button'
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-purple-dark"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? <FiEye /> : <FiEyeOff />}
                        </button>
                    </div>
                    <InputError message={errors.password} />
                    <Link href={route('password.request')} 
                        className='lg:text-white text-purple-dark text-sm self-start mt-3 lg:mb-12 mb-8'>
                        Esqueceu a senha?
                    </Link>
                    <Button
                    disabled={processing}
                    type='submit'
                    value={'ENTRAR'}
                    className='bg-purple-dark text-white lg:text-purple-dark lg:bg-white'
                    />
                </form>
                <Link 
                href={route('cadastro')} 
                className='lg:text-white text-purple-dark mb-8'
                >
                    Cadastre-se
                </Link>
            </div>
        </div>
       </div>
    );
}
