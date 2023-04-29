import React, { useState } from 'react'
import Header from '../components/static/header'
import Location from '../components/static/location'
import { BsFillGridFill, BsGrid } from 'react-icons/bs'
import { TiThMenuOutline, TiThMenu } from 'react-icons/ti'
import Card from '../components/card'
import Card2 from '../components/card2'
const items = ["All", "Office", "LivingRoom", "Kitchen", "Bedroom", "Dining", "Kids"]
const colors = [{ nselected: "#ff7f7f", selected: "#ff0000", name: "red" },
{ nselected: "#7fff7f", selected: "#00ff00", name: "green" },
{ nselected: "#7f7fff", selected: "#3131ff", name: "blue" },
{ nselected: "#7f7f7f", selected: "#0c0c0c", name: "black" },
{ nselected: "#ffdc7f", selected: "#ffba03", name: "yellow" }]

const products = [{ id: 1, img: "https://res.cloudinary.com/dt2g7mgtv/image/upload/v1681753501/react-comfy-store-products/prod-12_ga6sdq.jpg", price: 30.99, name: "Modern Poster", detail: "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge" },
{ id: 2, img: "https://res.cloudinary.com/dt2g7mgtv/image/upload/v1681750929/react-comfy-store-products/product-4_ebl6q1.jpg", price: 90.99, name: "Arm chair", detail: "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge" },
{ id: 3, img: "https://res.cloudinary.com/dt2g7mgtv/image/upload/v1681753657/react-comfy-store-products/prod-16_jfwx3m.jpg", price: 960.99, name: "Suede Armchair", detail: "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge" },
{ id: 4, img: "https://res.cloudinary.com/dt2g7mgtv/image/upload/v1681753354/react-comfy-store-products/prod-9_j3dsja.jpg", price: 230.99, name: "Leather Chair", detail: "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge" },
{ id: 5, img: "https://res.cloudinary.com/dt2g7mgtv/image/upload/v1681752461/react-comfy-store-products/product-6_rhaxfo.jpg", price: 120.9, name: "Emperor Bed", detail: "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge" },
{ id: 6, img: "https://res.cloudinary.com/dt2g7mgtv/image/upload/v1681749482/react-comfy-store-products/iuYyO9RP_o_upinxq.jpg", price: 240.99, name: "Accent Chair", detail: "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge" },
{ id: 7, img: "https://res.cloudinary.com/dt2g7mgtv/image/upload/v1681753552/react-comfy-store-products/prod-13_cv5csw.jpg", price: 250.99, name: "Shelf", detail: "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge" },
{ id: 8, img: "https://res.cloudinary.com/dt2g7mgtv/image/upload/v1681753441/react-comfy-store-products/prod-11_lff6yt.jpg", price: 230.99, name: "Modern Bookshelf", detail: "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge" },
{ id: 9, img: "https://res.cloudinary.com/dt2g7mgtv/image/upload/v1681753314/react-comfy-store-products/prod-8_qzulqi.jpg", price: 230.99, name: "High-Back Bench", detail: "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge" },
]

const Product = () => {

    const [selectedItem, setSelectedItem] = useState("All")
    const [selectedColor, setSelectedColor] = useState("All")
    const [displayType, setDispalyType] = useState("grid")
    const handleItems = (item) => {
        setSelectedItem(item)
    }
    console.log(selectedColor)
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
                                        <span className={`${item === selectedItem && `under`} text-gray-600 cursor-pointer`} onClick={() => { handleItems(item) }}>{item}</span>
                                    )
                                })
                            }
                            <h2 className='font-bold tracking-wide font-poppins'>Company</h2>
                            <select name="" id="" className='bg-[rgba(130,130,126,0.14)] px-4 py-[8px] rounded-lg'>
                                <option value="marcos">marcos</option>
                                <option value="liddy">liddy</option>
                                <option value="ikea">ikea</option>
                                <option value="caressa">caressa</option>
                            </select>
                            <h2 className='font-bold tracking-wide font-poppins'>Color</h2>
                            <div className='flex gap-1'>
                                <label>
                                    <input type="radio" name={'color'} id={"All"} value={"All"} className='hidden' onChange={() => setSelectedColor("All")} checked={selectedColor === "All"} />
                                    <span className={`${selectedColor === "All" && `text-gray-600 under `}`}>All</span>
                                </label>
                                {
                                    colors.map(color => {
                                        return (
                                            <input className={`accent-[${color.selected}] focus:ring-blue-500`} type="radio" name={'color'} checked={selectedColor === color.name} onChange={() => setSelectedColor(color.name)} />
                                        )
                                    })
                                }
                            </div>
                            <button className='bg-red-500 text-white px-3 py-1 rounded font-poppins mt-3'>cancle filter</button>

                        </div>

                    </div>
                    <div className='flex-1'>
                        <div className='flex gap-10 items-center'>
                            <div className='flex gap-3'>
                                <div onClick={() => setDispalyType("grid")} className='cursor-pointer'>
                                    {
                                        displayType === 'grid' ? <BsFillGridFill fontSize={'25px'} /> : <BsGrid fontSize={'25px'} />
                                    }
                                </div>
                                <div onClick={() => setDispalyType("n-grid")} className='cursor-pointer' >
                                    {
                                        displayType === 'n-grid' ? <TiThMenu fontSize={'25px'} /> : <TiThMenuOutline fontSize={'25px'} />
                                    }
                                </div>
                            </div>
                            <div className=''>
                                <span>{"22"}</span> Found
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
                        {/* <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-6 p-6'> */}
                        <div className={`grid ${displayType === "grid" ? `lg:grid-cols-3 md:grid-cols-2 gap-6` : `lg:grid-cols-1 gap-16 `} p-6`}>
                            {
                                products.map(product => {
                                    return (<div key={product.id}>
                                        {displayType === "grid" && <Card id={product.id} name={product.name} img={product.img} price={product.price} />}
                                        {displayType === "n-grid" && <Card2 id={product.id} name={product.name} img={product.img} price={product.price} detail={product.detail} />}
                                    </div >

                                    )
                                })
                            }
                        </div>



                    </div>

                </div>

            </main>
        </div>
    )
}

export default Product