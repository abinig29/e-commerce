import React, { useState } from 'react'
import { AiFillDelete } from 'react-icons/ai'


const EachCart = ({ price, subTotal, img, name, color, amount }) => {
    const [totalAmount, setTotalAmount] = useState(amount)
    const handleAmount = (type) => {
        switch (type) {
            case "inc":
                setSelectedNumber(pre => pre + 1)
                break
            case "dec":
                setSelectedNumber(pre => {
                    if (pre === 1) return pre
                    return (pre - 1)
                })
                break
        }
    }

    return (
        <div className='flex items-center justify-around '>
            <div className='flex items-center p-5 gap-5   mr-32 flex-1'>
                <img src={img} alt="" className='sm:w-[80px] md:w-[100px] lg:w-[120px] h-[100px] object-cover rounded' />
                <div className='flex flex-col'>
                    <h2 className='font-poppins font-bold tracking-wider text-[12px]'>{name}</h2>
                    <h3 className='text-gray-500'>Color : {color}</h3>
                </div>
            </div>
            <div className='md:flex-1'>
                <h3 className='text-font_color'>${price}</h3>
            </div>
            <div className='flex items-center gap-6  md:flex-1 '>
                <button className='font-bold text-[30px] cursor-pointer' onClick={() => handleAmount('dec')}>-</button>
                <span className='font-bold text-[30px]' >{totalAmount}</span>
                <button className='font-bold text-[30px] cursor-pointer' onClick={() => handleAmount('inc')}>+</button>
            </div>
            <div className=''>
                <h3 className=''>${subTotal}</h3>
            </div>
            <button className='ml-[180px] p-1 bg-red-400 rounded '>{<AiFillDelete fontSize={'20px'} color='white' />}</button>
        </div>
    )
}

export default EachCart
