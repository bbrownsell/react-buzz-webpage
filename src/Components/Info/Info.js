import React from 'react';
import '../Info/Info.css';
import ImageOne from '../../Images/image-four.jpg';
import ImageTwo from '../../Images/image-five.jpg';
import ImageThree from '../../Images/image-six.jpg';

const Info = () => {
    return (
        <>
            <section className="info-section">
                <div className="info-heading">
                    <h1>Business and Marketing</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque debitis recusandae quae deserunt expedita quam repellat natus suscipit temporibus quod?</p>
                </div>
                <div className="image-container">
                    <div className="info-image">
                        <img src={ImageOne} alt="" />
                    </div>
                    <div className="info-image">
                        <img src={ImageTwo} alt="" />
                    </div>
                    <div className="info-image">
                        <img src={ImageThree} alt="" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Info
