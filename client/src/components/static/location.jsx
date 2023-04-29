import React from 'react'

const Location = ({ where }) => {
    return (
        <div className="bg-background1 ">
            <div className='lg:max-w-[1280px] w-full mx-auto p-8'>
                <h2 className="font-poppins text-[30px] font-bold inline-block">{where[0]}</h2>
                <span className="font-poppins text-[30px] font-bold text-[#b3876e] inline-block">{where[1]}</span>
            </div>
        </div>
    )
}

export default Location
