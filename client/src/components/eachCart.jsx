import React, { useState } from 'react'
import { AiFillDelete } from 'react-icons/ai'
import useCartContext from '../customHook/cartUseContext'


const EachCart = ({ id, price, subTotal, img, name, color, amount }) => {
    const { dispatch } = useCartContext()

    const handleAmount = (type) => {
        switch (type) {
            case "inc":
                dispatch({ type: "inc", payload: id })
                break
            case "dec":
                if (amount === 1) return dispatch({ type: "remove", payload: id })
                return dispatch({ type: "dec", payload: id })
        }
    }

    return (
        <div className='flex items-center justify-around'>
            <div className='flex items-center p-5 gap-5 md:flex-1  md:mr-32 '>
                <img src={img} alt="" className='w-full md:w-[100px] h-[100px] object-cover rounded' />
                <div className='flex flex-col'>
                    <h2 className='font-poppins font-bold tracking-wider text-[12px]'>{name}</h2>
                    <div className='flex items-center  gap-2'>
                        <h3 className='text-gray-500'>Color: </h3>
                        <div className={`${color} h-[13px] w-[13px] rounded-full  `}></div>
                    </div>
                </div>
            </div>
            <div className=' hidden sm:block md:flex-1'>
                <h3 className='text-font_color'>${price}</h3>
            </div>
            <div className='flex items-center gap-6  md:flex-1 p-4 '>
                <button className='font-bold text-[30px] cursor-pointer' onClick={() => handleAmount('dec')}>-</button>
                <span className='font-bold text-[30px]' >{amount}</span>
                <button className='font-bold text-[30px] cursor-pointer' onClick={() => handleAmount('inc')}>+</button>
            </div>
            <div className='hidden sm:block'>
                <h3 className=''>${subTotal}</h3>
            </div>
            <button onClick={() => dispatch({ type: "remove", payload: id })} className='md:ml-[180px] p-1 bg-red-400 rounded '>{<AiFillDelete fontSize={'20px'} color='white' />}</button>
        </div>
    )
}

export default EachCart
