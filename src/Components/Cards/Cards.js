import React from 'react';
import './Cards.css';

const Cards = () => {
    return (
        <>
            <section className="cards-section"> 

            <div className="cards-banner">
                <h1 className="cards-banner-title">
                    our services
                </h1>
                <div className="cards-banner-text">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam dicta delectus tempore libero praesentium odio molestias ea placeat at fuga asperiores dolor ipsa reiciendis enim eius, animi provident.</p>
                </div>
            </div>



                <div className="cards-container">
                    <div className="card">
                        <div className="card-title">
                            <h1>1000+</h1>
                            <h3>templates</h3>
                        </div>
                        <div className="card-text">
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis quis exercitationem ut quae.</p>
                            <button>more</button>
                        </div>
                    </div>

                    <div className="card">
                    <div className="card-title">
                            <h1>100k</h1>
                            <h3>happy users</h3>
                        </div>
                        <div className="card-text">
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis quis exercitationem ut quae.</p>
                            <button>more</button>
                        </div>
                    </div>

                    <div className="card">
                    <div className="card-title">
                            <h1>20+</h1>
                            <h3>experience</h3>
                        </div>
                        <div className="card-text">
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis quis exercitationem ut quae..</p>
                            <button>more</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Cards
