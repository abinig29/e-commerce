import React from 'react'
import Header from '../components/static/header'
import Location from '../components/static/location'
import useCartContext from '../customHook/cartUseContext'
import EachCart from '../components/eachCart'

const Cart = () => {
    const { dispatch, cart: carts } = useCartContext()

    return (
        <div>
            <Header />
            <Location where={["/Cart", '']} />
            <main className='lg:max-w-[1280px] w-full mx-auto px-8 py-10'>
                <div className=' justify-around text-[15px] font-poppins text-gray-700  lg:flex hidden '>
                    <span>Item</span>
                    <span>Price</span>
                    <span>Quantity</span>
                    <span>Subtotal</span>
                </div>
                <div className='w-full h-[1px] bg-gray-300 mt-10' />
                <div className='flex flex-col'>
                    {
                        carts.map(cart => <EachCart {...cart} />
                        )
                    }
                </div>
            </main>
        </div>
    )
}

export default Cart
