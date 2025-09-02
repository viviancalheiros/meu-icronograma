import { Link } from '@inertiajs/react';
import Title from '@/Components/Title';
import Button from '@/Components/Button';
import LogoUfal from '@/Components/LogoUfal';
import LogoIc from '@/Components/LogoIC';
import { useState } from 'react';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = () => {
        e.preventDefault();
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
                        type='text' 
                        placeholder='E-mail' 
                        required
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        className='lg:bg-white bg-purple-dark mb-4 h-12 pl-4 rounded-2xl text-sm w-full 
                        lg:placeholder:text-purple-dark placeholder:text-white'
                    ></input>
                    <input 
                        type='text'
                        placeholder='Senha'
                        required
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        className='lg:bg-white bg-purple-dark h-12 pl-4 rounded-2xl text-sm w-full 
                        lg:placeholder:text-purple-dark placeholder:text-white'
                        ></input>
                    <Link href={route('password.request')} className='lg:text-white text-purple-dark self-start mt-4 lg:mb-12 mb-8'>Esqueceu a senha?</Link>
                    <Link href={'/home'}>
                        <Button 
                        value={'ENTRAR'}
                        className='bg-purple-dark text-white lg:text-purple-dark lg:bg-white'
                        />
                    </Link> 
                </form>
                <Link href="" className='lg:text-white text-purple-dark mb-8'>Cadastre-se</Link>
            </div>
        </div>
       </div>
    );
}
