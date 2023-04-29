import React, { useState } from 'react'
import hero from '../assets/hero-1.jpeg'

const Login = () => {
    const [login, setLogin] = useState({ email: "", password: "" })
    const [signup, setSignup] = useState({ email: "", password: "", firstName: "", lastName: "" })
    const [isLogin, setIsLogin] = useState(false)
    const handleLogin = (e) => {
        setLogin(pre => {
            return { ...pre, [e.target.name]: e.target.value }
        })
    }
    const handleSignup = (e) => {
        setSignup(pre => {
            return { ...pre, [e.target.name]: e.target.value }
        })
    }
    return (
        <div className='flex '>
            <div className='flex-1 flex justify-center items-center  h-[100vh] '>
                {isLogin && <div className='flex flex-col items-stretch'>
                    <h3 className='text-[30px] font-bold font-poppins'>Welcome to ComfySloth </h3>
                    <h2 className='text-gray-500 font-poppins '>welcome back please enter your details</h2>
                    <div className='flex flex-col gap-2 '>
                        <label htmlFor="email">Email</label>
                        <input value={login.email} type="email" id='email' className='outline-none bg-[rgba(130,130,126,0.14)] py-2 px-4 rounded' name='email' onChange={handleLogin} />
                    </div>
                    <div className='flex flex-col gap-2 '>
                        <label htmlFor="password">Password</label>
                        <input value={login.password} name='password' type="password" id='password' className='outline-none bg-[rgba(130,130,126,0.14)] py-2 px-4 rounded' onChange={(e) => handleLogin(e)} />
                    </div>
                    <button onClick={() => { }} className='mt-6 font-poppins border-none px-4 py-2 bg-[#ab7a5f] rounded text-white shadow-md hover:bg-[#d5bcaf] hover:text-black transition-all duration-500'>Login</button>
                    <h6 className='mt-5'>Dont have an account?<span className='text-font_color cursor-pointer' onClick={() => setIsLogin(pre => !pre)}>  Sign Up</span></h6>

                </div>
                }
                {
                    !isLogin &&
                    <div className='flex flex-col items-stretch gap-4'>
                        <h3 className='text-[30px] font-bold font-poppins'>Welcome to ComfySloth </h3>
                        <h2 className='text-gray-500 font-poppins '>welcome back please enter your details</h2>
                        <div className='flex flex-col gap-2 '>
                            <label htmlFor="email">First Name</label>
                            <input value={signup.firstName} type="text" id='email' className='outline-none bg-[rgba(130,130,126,0.14)] py-2 px-4 rounded' name='firstName' onChange={handleSignup} />
                        </div>
                        <div className='flex flex-col gap-2 '>
                            <label htmlFor="email">Last Name</label>
                            <input value={signup.lastName} type="text" id='email' className='outline-none bg-[rgba(130,130,126,0.14)] py-2 px-4 rounded' name='lastName' onChange={handleSignup} />
                        </div>
                        <div className='flex flex-col gap-2 '>
                            <label htmlFor="email">Email</label>
                            <input value={signup.email} type="eamil" id='email' className='outline-none bg-[rgba(130,130,126,0.14)] py-2 px-4 rounded' name='email' onChange={handleSignup} />
                        </div>
                        <div className='flex flex-col gap-2 '>
                            <label htmlFor="password">Password</label>
                            <input value={signup.password} name='password' type="password" id='password' className='outline-none bg-[rgba(130,130,126,0.14)] py-2 px-4 rounded' onChange={handleSignup} />
                        </div>
                        <button onClick={() => { }} className='mt-6 font-poppins border-none px-4 py-2 bg-[#ab7a5f] rounded text-white shadow-md hover:bg-[#d5bcaf] hover:text-black transition-all duration-500'>Sign up</button>
                        <h6 className=''>Already have an account?<span className='text-font_color cursor-pointer' onClick={() => setIsLogin(pre => !pre)}>  Login</span></h6>

                    </div>
                }
            </div>
            <div className='flex-1 hidden md:block'>
                <img src={hero} alt="" className='h-[100vh] w-full object-cover' />
            </div>

        </div>
    )
}

export default Login