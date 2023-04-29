import React from 'react'
import { FiSearch } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'


const Card = ({ img, price, name, id }) => {
    const navigate = useNavigate()
    return (
        <div className='card  h-[250px]'>
            <div className='relative'>
                <img src={img} alt="sofa1" className='rounded h-[220px] w-full object-cover transition-all duration-500' />
                <span className="search absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] bg-font_color p-2 rounded-full cursor-pointer transition-all duration-300 ease-in-out " onClick={() => navigate(`/product/${id}`)}>
                    <FiSearch size={'30px'} style={{ color: "white" }} />
                </span>
            </div>
            <div className="flex items-center justify-between mt-2">
                <h5 className="font-poppins text-gray-600 tracking-widest">{name}</h5>
                <span className="text-primary">${price}</span>
            </div>

        </div>
    )
}

export default Card

