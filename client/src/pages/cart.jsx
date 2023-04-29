import React from 'react'
import Header from '../components/static/header'
import Location from '../components/static/location'

const Cart = () => {
    return (
        <div>
            <Header />
            <Location where={["/Product", '']} />
        </div>
    )
}

export default Cart
