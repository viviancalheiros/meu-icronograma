import Button from '@/Components/Button';
import InputError from '@/Components/InputError';
import Title from '@/Components/Title';
import { useForm } from '@inertiajs/react';

export default function ResetPassword({ token, email }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        token: token,
        email: email,
        password: '',
        password_confirmation: '',
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('password.store'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    return (
        <div className='bg-purple-dark min-h-screen w-screen font-roboto flex flex-col items-center justify-center'>
            <div className='flex flex-row items-center mb-20'>
                <Title className='text-4xl' />
            </div>
            <form 
                className='w-1/2 lg:w-1/3 h-full flex flex-col items-center justify-center'
                onSubmit={submit}
            >
                <div className='w-full flex flex-col'>
                    <label className='text-white'>E-mail</label>
                    <input
                        type="email"
                        name="email"
                        className='bg-gray-100 text-purple-dark placeholder-gray-300 
                        rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 h-12
                        shadow-xl border-purple-dark border-1'
                        value={data.email}
                        autoComplete="username"
                        onChange={(e) => setData('email', e.target.value)}
                    />
                    <InputError message={errors.email} className="mt-2 font-medium text-[#ff6b6b]" />
                </div>

                <div className='w-full flex flex-col mt-6'>
                    <label className='text-white'>Senha</label>
                    <input
                        type="password"
                        name="password"
                        value={data.password}
                        autoComplete="new-password"
                        className='bg-gray-100 text-purple-dark placeholder-gray-300 
                        rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 h-12
                        shadow-xl border-purple-dark border-1'
                        isFocused={true}
                        onChange={(e) => setData('password', e.target.value)}
                    />
                    <InputError message={errors.password} className="mt-2 font-medium text-[#ff6b6b]" />
                </div>

                <div className='w-full flex flex-col mt-6'>
                    <label className='text-white'>Confirmação de senha</label>
                    <input
                        type="password"
                        name="password_confirmation"
                        className='bg-gray-100 text-purple-dark placeholder-gray-300 
                        rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 h-12
                        shadow-xl border-purple-dark border-1'
                        value={data.password_confirmation}
                        autoComplete="new-password"
                        onChange={(e) =>
                            setData('password_confirmation', e.target.value)
                        }
                    />
                    <InputError
                        message={errors.password_confirmation}
                        className="mt-2 font-medium text-[#ff6b6b]"
                    />
                </div>
                <div className="mt-14 text-center w-full">
                    <Button
                        type="submit"
                        value={processing ? 'ENVIANDO...' : 'ENVIAR'}
                        className='bg-gray-100 lg:w-2/3 md:1/2 w-full text-purple-dark shadow-xl font-semibold'
                        disabled={processing}
                    />
                </div>
            </form>
        </div>
    );
}
