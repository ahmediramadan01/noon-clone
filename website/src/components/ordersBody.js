import React from 'react'
import OrderCard from './order-card'

function OrdersBody() {
    return (
        <>
            
            {/* orders cards */}
            <div className=" text-sm bg-white mx-5 my-5 h-32">
                <OrderCard />
            </div>
        </>
    )
}

export default OrdersBody
