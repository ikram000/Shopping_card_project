import React from 'react'
import { Products } from '../data'
const Product = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    {
                        Products.map((item) =>
                            <div key={item.id} className="container col-md-4 my-5">
                                <div className="card bg-dark" style={{ width: '18rem' }}>
                                    <div className="p-3 d-flex justify-content-center align-items-center">
                                        <img
                                            src={item.imgSrc}
                                            className="card-img-top"
                                            alt="..."
                                            style={{
                                                width: "200px",
                                                height: "200px",
                                                objectFit: "contain",
                                                borderRadius: "10px"
                                            }}
                                        />
                                    </div>
                                    <div className="card-body text-light text-center">
                                        <h5 className="card-title">{item.title}</h5>
                                        <p className="card-text">{item.description}</p>
                                        <button className="btn btn-primary mx-3">{item.price}{""} PKR

                                        </button>
                                        <button className="btn btn-warning">Add To Card</button>
                                    </div>
                                </div>
                            </div>
                        )
                    }

                </div>
            </div>
        </div>
    )
}

export default Product