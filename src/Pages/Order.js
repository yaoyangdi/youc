import {React, useEffect} from 'react'

function Order() {
    useEffect(() => {
        window.location.href = "https://fngp.com.au/fngonline";  }, []);

    return (
        <div>
            <h1>Order</h1>
        </div>
    )
}

export default Order
