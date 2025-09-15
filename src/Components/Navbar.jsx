import React from 'react'

const Navbar = () => {
    return (
        <>
            <div className="nav_bar">
                <div className="left"> <h3>Shopping Cart Project</h3></div>
                <div className="middle">

                    <button className='btn btn-warning'><h5>Card Item Total Price = 0</h5></button>
                </div>
                <div classNameName="right">
                    <button type="button" className="btn btn-primary position-relative">
                        <span className="material-symbols-outlined">
                            shopping_cart
                        </span>
                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                            0
                            <span className="visually-hidden">unread messages</span>
                        </span>
                    </button>
                </div>
            </div>
        </>
    )
}

export default Navbar