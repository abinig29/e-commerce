import React from 'react'


const SimpleCard = ({ type, text, icon }) => {
    return (
        <div className='card rounded bg-primary p-10 flex items-center flex-col lg:w-[30%] sm:w-[45%] gap-4'>
            <div className='h-[50px] w-[50px] rounded-full flex items-center justify-center bg-background1'>
                {icon}
            </div>
            <p className='font-bold text-[20px]'>
                {type}
            </p>
            <p>{text}</p>
        </div>
    )
}

export default SimpleCard
