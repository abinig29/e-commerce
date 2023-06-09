import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { BsFillCartFill } from "react-icons/bs"
import { FaUserAlt } from "react-icons/fa"
import { HiMenu } from "react-icons/hi"
import { GrClose } from "react-icons/gr"
import logo from "../../assets/logo.svg"
import { useNavigate } from 'react-router-dom'
import useCartContext from '../../customHook/cartUseContext'



const Header = () => {
    const [open, setOpen] = useState(true)
    const navigate = useNavigate()
    const handleRoute = () => {
        navigate('/cart')
    }
    const { total } = useCartContext()

    return (
        <div className='lg:max-w-[1280px] w-full mx-auto'>
            <nav className='flex items-center justify-between py-4 px-6'>
                <img src={logo} alt="" className='w-[158px] p-0' />
                <ul className=' justify-between gap-6 text-[18px] text-gray-500 md:flex hidden'>
                    <NavLink className={'underline_decor'} to="/home"> Home </NavLink>
                    <NavLink className={'underline_decor'} to="/about"> About </NavLink>
                    <NavLink className={'underline_decor'} to="/product"> Product </NavLink>
                </ul>
                <div className='text-[20px]  items-center gap-6 md:flex hidden' >
                    <button className='flex relative items-center  gap-2' onClick={handleRoute}>
                        Cart
                        <h5 className='relative'><BsFillCartFill size={"25px"} />
                            <span className='absolute -top-2 -right-4 bg-primary rounded-full w-6 h-6 flex justify-center items-center'>
                                <p className='text-white text-sm'>{total}</p>
                            </span>
                        </h5>
                    </button>
                    {/* <button className='flex  items-center gap-2' onClick={() => navigate("/login")}>
                        <p>Login</p>
                        <span><FaUserAlt size={"25px"} /></span>

                    </button> */}
                </div>
                <div className='block md:hidden cursor-pointer' onClick={() => { setOpen(pre => !pre) }}>
                    <HiMenu size={"25px"} />
                </div>
                <div className={`md:hidden fixed w-[100%] top-0 left-0  h-[100vh] bg-white z-20  ${open ? `-translate-x-[100%]` : `-translate-x-[0%]`} transition-all duration-500 ease-in-out`}>
                    <div className=" ">
                        <div className="flex justify-between items-center px-10 py-2">
                            <img src={logo} alt="" className='w-[158px] p-0' />
                            <span className="cursor-pointer" onClick={() => { setOpen(pre => !pre) }}>
                                <GrClose size={"25px"} fontWeight={"600"} />
                            </span>
                        </div>
                        <ul className='flex flex-col justify-between  text-[18px] text-gray-500 mt-6'>

                            <NavLink className={'hover:pl-8 transition-all duration-300  font-poppins p-5 hover:bg-[#2970af26] '} to="/home"> Home </NavLink>
                            <NavLink className={'hover:pl-8 transition-all duration-300  font-poppins p-5 hover:bg-[#2970af26]'} to="/about"> About </NavLink>
                            <NavLink className={'hover:pl-8 transition-all duration-300  font-poppins p-5 hover:bg-[#2970af26]'} to="/product"> Product </NavLink>
                        </ul>
                        <div className='text-[20px]  items-center justify-center gap-6 flex mt-10 ' >
                            <button className='flex relative items-center  gap-2' onClick={handleRoute}>
                                Cart
                                <h5 className='relative'><BsFillCartFill size={"25px"} />
                                    <span className='absolute -top-2 -right-4 bg-primary rounded-full w-6 h-6 flex justify-center items-center'>
                                        <p className='text-white text-sm'>{total}</p>
                                    </span>
                                </h5>
                            </button>
                            {/* <button className='flex  items-center gap-2' onClick={() => navigate('/login')}>
                                <p>Login</p>
                                <span><FaUserAlt size={"25px"} /></span>
                            </button> */}
                        </div>
                    </div>

                </div>

            </nav>
        </div >
    )
}

export default Header