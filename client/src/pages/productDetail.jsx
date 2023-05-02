import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../components/static/header'
import Location from '../components/static/location'
import StarRating from '../components/static/review'
import { useNavigate } from 'react-router-dom'
import useProductContext from '../customHook/productUseContext'
import useCartContext from '../customHook/cartUseContext'

const ProductDetail = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const [selectedImg, setSelectedImg] = useState(0)
    const [selectedNumber, setSelectedNumber] = useState(1)
    const { selectedProduct, dispatch } = useProductContext()
    const [selectedColor, setSelectedColor] = useState(null)
    const { dispatch: dis, cart } = useCartContext()
    const added = cart.find(item => item.productId === id
    )
    const [cartAdded, setCartAdded] = useState(added ? true : false)

    const handleAddToCart = () => {
        const cartId = Date.now().toString()
        const cart = { id: cartId, name: selectedProduct.name, productId: id, img: selectedProduct.img, subTotal: (selectedProduct.price * selectedNumber).toFixed(2), price: selectedProduct.price, amount: selectedNumber, color: selectedColor }
        dis({ type: 'add', payload: cart })
        setCartAdded(true)
        navigate('/cart')
    }
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
    useEffect(() => {
        dispatch({ type: 'select', payload: id })
    }, [])

    useEffect(() => {
        if (selectedProduct) {
            setSelectedColor(selectedProduct.color[0])

        }
    }, [selectedProduct])
    if (!selectedProduct) return
    return (

        <div>
            <Header />
            <Location where={['/Product', `/${selectedProduct.name}`]} />
            <main className='lg:max-w-[1280px] w-full mx-auto px-8 py-10 '>
                <div className='flex flex-col md:flex-row gap-10 items-center md:items-start'>
                    <div className='flex flex-col gap-6 items-start flex-1'>
                        <button onClick={() => navigate(-1)} className='font-poppins border-none px-4 p-1 bg-[#ab7a5f] rounded text-white shadow-md hover:bg-[#d5bcaf] hover:text-black transition-all duration-500'>Back to products</button>
                        <div>
                            <img src={selectedProduct.imgs[selectedImg]} alt="" className='rounded h-[520px] w-full object-cover' />
                            <div className='flex w-full gap-2 mt-3'>
                                {
                                    selectedProduct.imgs.map((image, index) => {
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
                        <h2 className='font-bold text-[30px]'>{selectedProduct.name}</h2>
                        <StarRating rating={selectedProduct.rating} />
                        <h4 className='text-font_color font-bold text-[20px]'>${selectedProduct.price}</h4>
                        <p>{selectedProduct.detail}</p>
                        <h4 className='font-bold flex gap-10'><span>Available :</span> <span className='font-normal'>{selectedProduct.available}</span></h4>
                        <h4 className='font-bold flex gap-16'> <span>Brand :</span> <span className='font-normal'>{`   ${selectedProduct.camapny}`}</span></h4>
                        <div className='w-full h-[1px] bg-slate-400 rounded-full'></div>
                        <div className='flex items-center gap-14'>
                            <h4 className='font-bold '>Color:</h4>
                            <div className='flex gap-2'>
                                {
                                    selectedProduct.color.map(color => {
                                        return (
                                            <div onClick={() => setSelectedColor(color)} className={`${color} h-[20px] w-[20px] rounded-full ${selectedColor === color && ` h-[26px] w-[26px]  border border-[black]`}`}></div>

                                            // <input checked={color === selectedColor} onChange={() => setSelectedColor(color)} type="radio" name='color' className='w-[20px] h-[20px] ml-4 ' />
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
                        <button disabled={cartAdded} onClick={handleAddToCart} className={`font-poppins border-none px-4 p-1 ${cartAdded ? `bg-[#c8b5ab]` : `bg-[#ab7a5f]`} rounded text-white shadow-md ${!cartAdded && `hover:bg-[#d5bcaf] hover:text-black`} transition-all duration-500`}>{!cartAdded ? 'Add to cart' : 'Added'}</button>




                    </div>

                </div>

            </main>
        </div>
    )
}



export default ProductDetail