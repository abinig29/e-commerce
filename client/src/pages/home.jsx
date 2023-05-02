import React from 'react'
import hero1 from "../assets/hero-1.jpeg"
import hero2 from "../assets/hero-2.jpeg"
import { GiCompass, GiBatteredAxe } from 'react-icons/gi'
import { TfiWrite } from 'react-icons/tfi'


import Header from '../components/static/header'
import Card from '../components/card'
import useProductContext from '../customHook/productUseContext'
import { useNavigate } from 'react-router-dom'
import SimpleCard from '../components/static/simpleCard'


const Home = () => {
    const { products } = useProductContext()
    const navigate = useNavigate()
    return (
        <div className="bg-white">
            <Header />
            <section>
                <div className='lg:max-w-[1280px] w-full mx-auto px-8 py-10'>
                    <div className='flex justify-between items-center md:flex-row flex-col gap-20'>
                        <div className='flex flex-col gap-6 items-start  flex-1'>
                            <h1 className="font-poppins font-bold leading-[50px] text-5xl">
                                Design Your <br /> Comfort Zone
                            </h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Ad laborum, consequuntur quod architecto nulla repudiandae esse neque,
                                delectus consequatur veritatis .
                            </p>
                            <button onClick={() => navigate("/product")} className={`font-poppins border-none px-4 p-1  bg-[#ab7a5f] rounded text-white shadow-md  hover:bg-[#d5bcaf] hover:text-black transition-all duration-500`}>SHOP NOW</button>
                        </div>
                        <div className='flex-1'>
                            <div className="relative hidden md:block">
                                <img src={hero1} alt="" className='w-[75%] rounded' />
                                <img src={hero2} alt="" className="absolute bottom-0 -left-14 rounded w-[50%]" />
                            </div>
                        </div>


                    </div>
                </div>
            </section>
            <section className="bg-background2">
                <div className='lg:max-w-[1280px] w-full mx-auto px-8 py-10 flex flex-col items-center gap-4'>
                    <h4 className="font-bold relative text-5xl text-center before:absolute before:w-20 before:left-[50%] before:-translate-x-[50%] before:bg-primary before:-bottom-5 before:h-1 ">Featured Products</h4>
                    <div className='grid lg:grid-cols-3 mt-20 gap-8 sm:grid-cols-2  w-full'>
                        {
                            products.slice(0, 3).map(item => <Card id={item.id} img={item.img} price={item.price} name={item.name} />)
                        }

                    </div>
                    <button onClick={() => navigate("/product")} className={`font-poppins border-none px-4 p-1  bg-[#ab7a5f] rounded text-white shadow-md  hover:bg-[#d5bcaf] hover:text-black transition-all duration-500`}>All product</button>
                </div>
            </section>
            <section className="bg-background1 lg:h-[400px] md:h-[900px]">
                <div className='lg:max-w-[1280px] w-full mx-auto px-8 py-10 flex flex-col items-center gap-4'>
                    <div className='w-full '>
                        <div className='flex justify-between md:items-center flex-col md:flex-row items-start gap-4 '>
                            <p className="font-bold text-[26px] md:text-[30px] text-font_color flex-1">Custom Furniture <br /> Built Only For You</p>
                            <p className='flex-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos eum, distinctio quo repellat vero recusandae sed iste ipsum suscipit</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-8 mt-20 flex-wrap justify-between'>
                        <SimpleCard icon={<GiCompass size={'25px'} />} type={"Mission"} text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit eligendi fugit excepturi ab? Commodi minus totam sint, sed cumque corporis."} />
                        <SimpleCard icon={<GiBatteredAxe size={'25px'} />} type={"Vision"} text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit eligendi fugit excepturi ab? Commodi minus totam sint, sed cumque corporis."} />
                        <SimpleCard icon={<TfiWrite size={'25px'} />} type={"History"} text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit eligendi fugit excepturi ab? Commodi minus totam sint, sed cumque corporis."} />
                    </div>
                </div>
            </section>
            <section >
                <div className='lg:max-w-[1280px] w-full mx-auto lg:mt-[250px] mt-[50px] px-8 h-[200px] '>
                    <p className="font-poppins font-bold text-[30px] tracking-wider">Join our newsletter and get 20% off</p>
                    <div className='flex md:flex-row flex-col mt-10 gap-6'>
                        <p className='flex-1'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid temporibus animi, laborum voluptates optio necessitatibus.</p>
                        <div className=' flex-1'>
                            <div className='border-black border-2 flex w-[400px] rounded-r-lg  bg-primary'>
                                <input type="text" className='w-[300px] outline-none  px-2 py-2 border-r-2 border-r-black   ' />
                                <button className='px-2'>Subscribe</button>
                            </div>
                        </div>

                    </div>

                </div>
            </section>


        </div >
    )
}

export default Home
