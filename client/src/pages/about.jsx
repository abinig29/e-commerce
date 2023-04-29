import React from 'react'
import Location from '../components/static/location'
import Header from '../components/static/header'
import hero1 from "../assets/hero-1.jpeg"


const About = () => {
    return (
        <div>
            <Header />
            <Location where={"/About"} />
            <main className='lg:max-w-[1280px] w-full mx-auto px-8 py-10 ' >
                <div className='flex gap-8'>
                    <div className='flex-1 px-10' >
                        <img src={hero1} alt="" className='w-full h-[500px] object-cover rounded' />
                    </div>
                    <div className='flex-1'>
                        <h3 className='font-poppins inline-block relative text-[35px] font-bold before:contents-[] before:absolute before:h-1 before:w-[50%] before:bg-background1 before:-bottom-3 '>Our History</h3>
                        <p className='mt-10 -tracking-tighter text-gray-500'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                            Fugiat accusantium sapiente tempora sed dolore esse
                            deserunt eaque excepturi, delectus error accusamus
                            vel eligendi, omnis beatae. Quisquam, dicta. Eos
                            quod quisquam esse recusandae vitae neque dolore,
                            obcaecati incidunt sequi blanditiis est exercitationem
                            molestiae delectus saepe odio eligendi modi porro eaque
                            in libero minus unde sapiente consectetur architecto.
                            Ullam rerum, nemo iste ex, eaque perspiciatis nisi, eum
                            totam velit saepe sed quos similique amet. Ex, voluptate
                            accusamus nesciunt totam vitae esse iste.</p>
                    </div>

                </div>

            </main>
        </div>
    )
}

export default About