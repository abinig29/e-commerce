import React from 'react'
import Header from '../components/static/header'
import Location from '../components/static/location'
import useCartContext from '../customHook/cartUseContext'
import EachCart from '../components/eachCart'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
    const navigate = useNavigate()
    const { dispatch, cart: carts, totalPrice } = useCartContext()

    return (
        <div>
            <Header />
            <Location where={["/Cart", '']} />
            <main className='lg:max-w-[1280px] w-full mx-auto px-8 py-10 min-h-[47vh]'>
                {
                    carts.length ?
                        <><div className=' justify-around text-[15px] font-poppins text-gray-700  lg:flex hidden '>
                            <span>Item</span>
                            <span>Price</span>
                            <span>Quantity</span>
                            <span>Subtotal</span>
                        </div><div className='w-full h-[1px] bg-gray-300 mt-10' /></>
                        : null
                }
                <div className='flex flex-col'>
                    {
                        carts.map(cart => <EachCart {...cart} />
                        )
                    }
                </div>
                {
                    carts.length ?
                        <>
                            <div className='flex justify-between w-full mt-3'>
                                <button onClick={() => navigate("/product")} className={`font-poppins border-none px-4 p-1  bg-[#ab7a5f] rounded text-white shadow-md  hover:bg-[#d5bcaf] hover:text-black transition-all duration-500`}>Continue Shopping</button>
                                <button onClick={() => dispatch({ type: "clear" })} className={`font-poppins border-none px-4 p-1  bg-black rounded text-white shadow-md  hover:bg-[#d5bcaf] hover:text-black transition-all duration-500`}>Clear cart</button>
                            </div>
                            <div className='flex justify-end w-full mt-10'>
                                <div className='border rounded px-10 py-5 flex flex-col gap-2 w-[400px] '>
                                    <div className='flex justify-between '>
                                        <h2 className='font-bold font-poppins'> Subtotal:</h2>
                                        <h4>${(totalPrice).toFixed(2)}</h4>
                                    </div>
                                    <div className='flex  justify-between'>
                                        <h2 className='font-poppins'>  Shipping Fee :</h2>
                                        <h4>${5.90}</h4>
                                    </div>
                                    <div className='w-full h-[1px] bg-gray-300 mb-4' />
                                    <div className='flex justify-between '>
                                        <h2 className='font-extrabold text-[20px] font-poppins'>  Order Total :</h2>
                                        <h4 className='font-bold'>${(5.90 + totalPrice).toFixed(2)}</h4>
                                    </div>
                                </div>

                            </div></> :
                        <div className='flex flex-col justify-center items-center gap-4'>
                            <p className='text-center font-bold text-[30px]'>Cart is empty</p>
                            <button onClick={() => navigate("/product")} className={`font-poppins border-none px-4 p-1  bg-[#ab7a5f] rounded text-white shadow-md  hover:bg-[#d5bcaf] hover:text-black transition-all duration-500`}>Fill cart</button>

                        </div>
                }

            </main>
        </div>
    )
}

export default Cart
