import { Link } from '@inertiajs/react';
import Title from '@/Components/Title';
import Button from '@/Components/Button';
import LogoUfal from '@/Components/LogoUfal';
import LogoIc from '@/Components/LogoIC';

export default function Login() {
    return (
       <div className='w-screen h-screen flex font-roboto'>
        <div className='bg-purple-dark w-1/2 flex flex-col items-center'>
            <div className='w-full h-3/6 flex flex-row pt-4 justify-center'>
                <LogoUfal width={35} height={76} className="ml-8" />
                <LogoIc width={80} height={80} className="ml-4" />
            </div>
            <div className='w-full h-4/6 flex flex-row'>
                <Title />
            </div>
        </div>
        <div className='bg-white w-1/2 flex flex-col items-center justify-center'>
            <div className='bg-purple-dark w-3/6 flex flex-col items-center rounded-2xl shadow-2xl'>
                <p className='text-2xl text-white font-semibold m-8 mb-16'>LOGIN</p>
                <form className='flex flex-col items-center w-4/6'>
                    <input type='text' placeholder='E-mail' required 
                        className='bg-white mb-4 h-12 pl-4 rounded-2xl text-sm w-full placeholder:text-purple-dark'></input>
                    <input type='text' placeholder='Senha' required 
                        className='bg-white h-12 pl-4 rounded-2xl text-sm w-full placeholder:text-purple-dark'></input>
                    <Link href="" className='text-white self-start mt-4 mb-12'>Esqueceu a senha?</Link>
                    <Button value={'ENTRAR'} />
                </form>
                <Link href="" className='text-white mb-8'>Cadastre-se</Link>
            </div>
        </div>
       </div>
    );
}
