import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../components/static/header'
import Location from '../components/static/location'
import StarRating from '../components/static/review'
import { useNavigate } from 'react-router-dom'


const product = {
    rating: 3.5, available: "In Stock", brand: "liddy",
    colors: ["blue", "red"],

    imgs: ["https://res.cloudinary.com/dt2g7mgtv/image/upload/v1681753314/react-comfy-store-products/prod-8_qzulqi.jpg", "https://res.cloudinary.com/dt2g7mgtv/image/upload/v1681750048/react-comfy-store-products/iXlbK9A6_o_qohafx.jpg", "https://res.cloudinary.com/dt2g7mgtv/image/upload/v1681750129/react-comfy-store-products/A11k7xmf_o_nogovf.jpg", "https://res.cloudinary.com/dt2g7mgtv/image/upload/v1681750403/react-comfy-store-products/rPR1K8nP_o_vvlay9.jpg", "https://res.cloudinary.com/dt2g7mgtv/image/upload/v1681750506/react-comfy-store-products/extra-4_qmljb3.jpg"], price: 230.99, name: "High-Back Bench", detail: "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge"
}
const ProductDetail = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const [selectedImg, setSelectedImg] = useState(0)
    const [selectedColor, setSelectedColor] = useState(product.colors[0])
    const [selectedNumber, setSelectedNumber] = useState(1)
    const handleNumber = (type) => {
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

        <div>
            <Header />
            <Location where={['/Product', `/${product.name}`]} />
            <main className='lg:max-w-[1280px] w-full mx-auto px-8 py-10 '>
                <div className='flex flex-col md:flex-row gap-10 items-center md:items-start'>
                    <div className='flex flex-col gap-6 items-start flex-1'>
                        <button onClick={() => navigate(-1)} className='font-poppins border-none px-4 p-1 bg-[#ab7a5f] rounded text-white shadow-md hover:bg-[#d5bcaf] hover:text-black transition-all duration-500'>Back to products</button>
                        <div>
                            <img src={product.imgs[selectedImg]} alt="" className='rounded h-[520px] w-full object-cover' />
                            <div className='flex w-full gap-2 mt-3'>
                                {
                                    product.imgs.map((image, index) => {
                                        return (
                                            <div className={`flex-1 ${index === selectedImg && `border-2 border-[#b3876e]`} rounded overflow-hidden`} onClick={() => setSelectedImg(index)} >
                                                <img src={image} alt="" className='h-[80px]  w-full object-cover ' />
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    <div className='flex-1 flex flex-col mt-14 gap-6 pr-5 items-start'>
                        <h2 className='font-bold text-[30px]'>{product.name}</h2>
                        <StarRating rating={product.rating} />
                        <h4 className='text-font_color font-bold text-[20px]'>${product.price}</h4>
                        <p>{product.detail}</p>
                        <h4 className='font-bold flex gap-10'><span>Available :</span> <span className='font-normal'>{product.available}</span></h4>
                        <h4 className='font-bold flex gap-16'> <span>Brand :</span> <span className='font-normal'>{`   ${product.brand}`}</span></h4>
                        <div className='w-full h-[1px] bg-slate-400 rounded-full'></div>
                        <div className='flex items-center gap-14'>
                            <h4 className='font-bold '>Color:</h4>
                            <div>
                                {
                                    product.colors.map(color => {
                                        return (
                                            <input checked={color === selectedColor} onChange={() => setSelectedColor(color)} type="radio" name='color' className='w-[20px] h-[20px] ml-4 ' />
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className='flex items-center gap-6'>
                            <button className='font-bold text-[40px] cursor-pointer' onClick={() => handleNumber("dec")}>-</button>
                            <span className='font-bold text-[60px]' >{selectedNumber}</span>
                            <button className='font-bold text-[40px] cursor-pointer' onClick={() => handleNumber("inc")}>+</button>
                        </div>
                        <button className='font-poppins border-none px-4 p-1 bg-[#ab7a5f] rounded text-white shadow-md hover:bg-[#d5bcaf] hover:text-black transition-all duration-500'>Add to cart </button>




                    </div>

                </div>

            </main>
        </div>
    )
}



export default ProductDetail