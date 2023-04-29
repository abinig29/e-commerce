import React from 'react'
import { useNavigate } from 'react-router-dom'


const Card2 = ({ id, img, price, name, detail }) => {
    const navigate = useNavigate()
    return (
        <div className='flex gap-6 md:items-center flex-col md:flex-row items-start'>
            <div className=' bg-slate-700 rounded-lg'>
                <img src={img} alt="" className='h-[200px] w-[300px] object-cover rounded' />
            </div>
            <div className='flex flex-col flex-1 items-start gap-2 '>
                <h2 className='text-[25px] font-poppins font-bold'>{name}</h2>
                <h5 className='font-bold text-font_color'>$ {price}</h5>
                <p className="text-gray-600 line-clamp-5">{detail.length > 150 ? detail.substring(0, 150) : detail}</p>
                <button onClick={() => navigate(`/product/${id}`)} className='border-none px-4 p-1 bg-[#ab7a5f] rounded-lg text-white shadow-md hover:bg-[#d5bcaf] hover:text-black transition-all duration-500'>Detail</button>
            </div>
        </div>
    )
}

export default Card2
