import React, { useContext, useEffect, useState } from 'react'
import Header from '../components/static/header'
import Location from '../components/static/location'
import { BsFillGridFill, BsGrid } from 'react-icons/bs'
import { TiThMenuOutline, TiThMenu } from 'react-icons/ti'
import Card from '../components/card'
import Card2 from '../components/card2'
import { items, colors } from "../data.js"
import useProductContext from '../customHook/productUseContext'


const Product = () => {

    const [selectedItem, setSelectedItem] = useState("All")
    const [selectedColor, setSelectedColor] = useState("All")
    const [selectedCampany, setSelectedCampany] = useState("All")
    const { products, dispatch, displayMode } = useProductContext()

    const handleCancle = () => {
        dispatch({ type: 'all' })
        setSelectedItem("All")
        setSelectedColor('All')
        setSelectedCampany("All")
    }
    const handleDispalyType = (typeOf) => {
        dispatch({ type: "setDisplayMode", payload: typeOf })
    }
    useEffect(() => {
        dispatch({ type: 'filter', payload: { selectedColor, selectedItem, selectedCampany } })
    }, [selectedColor, selectedItem, selectedCampany])

    return (
        <div>
            <Header />
            <Location where={["/Product", '']} />
            <main className='lg:max-w-[1280px] w-full mx-auto px-8 py-10 '>

                <div className='flex sm:flex-row flex-col gap-20 '>
                    <div className=''>
                        <input type="text" className="border-none bg-[rgba(130,130,126,0.14)] px-4 py-[8px] rounded-lg" placeholder='Search' />
                        <div className='flex flex-col gap-3 mt-6 items-start'>
                            <h2 className='font-bold tracking-wide font-poppins'>Catagory</h2>
                            {
                                items.map(item => {
                                    return (
                                        <span className={`${item === selectedItem && `under`} text-gray-600 cursor-pointer`} onClick={() => { setSelectedItem(item) }}>{item}</span>
                                    )
                                })
                            }
                            <h2 className='font-bold tracking-wide font-poppins'>Company</h2>
                            <select name="" id="" value={selectedCampany} className='bg-[rgba(130,130,126,0.14)] px-4 py-[8px] rounded-lg' onChange={(e) => setSelectedCampany(e.target.value)} >
                                <option value="All">all</option>
                                <option value="marcos">marcos</option>
                                <option value="liddy">liddy</option>
                                <option value="ikea">ikea</option>
                                <option value="caressa">caressa</option>
                            </select>
                            <h2 className='font-bold tracking-wide font-poppins'>Color</h2>
                            <div className='flex gap-1 items-center'>
                                <label>
                                    <input type="radio" name={'color'} id={"All"} value={"All"} className='hidden' onChange={() => setSelectedColor("All")} checked={selectedColor === "All"} />
                                    <span className={`${selectedColor === "All" && `text-gray-600 under `}`}>All</span>
                                </label>
                                {
                                    colors.map(color => {
                                        return (
                                            <div onClick={() => setSelectedColor(color.name)} className={`${color.name} h-[13px] w-[13px] rounded-full ${selectedColor === color.name && ` h-[16px] w-[16px]  border border-[black]`}`}></div>
                                        )
                                    })
                                }
                            </div>
                            <button className='bg-red-500 text-white px-3 py-1 rounded font-poppins mt-3' onClick={handleCancle}>cancle filter</button>

                        </div>

                    </div>
                    <div className='flex-1'>
                        <div className='flex gap-10 items-center'>
                            <div className='flex gap-3'>
                                <div onClick={() => handleDispalyType("grid")} className='cursor-pointer'>
                                    {
                                        displayMode === 'grid' ? <BsFillGridFill fontSize={'25px'} /> : <BsGrid fontSize={'25px'} />
                                    }
                                </div>
                                <div onClick={() => handleDispalyType("n-grid")} className='cursor-pointer' >
                                    {
                                        displayMode === 'n-grid' ? <TiThMenu fontSize={'25px'} /> : <TiThMenuOutline fontSize={'25px'} />
                                    }
                                </div>
                            </div>
                            <div className=''>
                                <span>{`${products.length}`}</span> Found
                            </div>
                            <div className='h-[2px] flex-1 bg-slate-500 rounded-full'></div>
                            <div className='flex'>
                                <h2 className='font-bold'>Sort by</h2>
                                <select name="" id="">
                                    <option value="low">{`Price(low)`}</option>
                                    <option value="high">{`Price(high)`}</option>
                                </select>
                            </div>
                        </div>
                        {
                            !products.length ? <div className='h-[60vh] flex items-center justify-center font-bold text-[30px]'><p className='under'>No products</p></div> :
                                < div className={`grid ${displayMode === "grid" ? `lg:grid-cols-3 md:grid-cols-2 gap-6` : `lg:grid-cols-1 gap-16 `} p-6`}>
                                    {
                                        products.map(product => {
                                            return (<div key={product.id}>
                                                {displayMode === "grid" && <Card id={product.id} name={product.name} img={product.img} price={product.price} />}
                                                {displayMode === "n-grid" && <Card2 id={product.id} name={product.name} img={product.img} price={product.price} detail={product.detail} />}
                                            </div >

                                            )
                                        })
                                    }
                                </div>
                        }



                    </div>

                </div>

            </main >
        </div >
    )
}

export default Product