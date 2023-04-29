import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/static/footer'


const Layout = () => {
    return (
        <div className='root'>
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout