import React from 'react';
import '../About/About.css';
import {HiOutlineLightBulb} from 'react-icons/hi';
import {IoIosGlobe} from 'react-icons/io';
import computerImage from '../../Images/image-three.jpg';
import coffeeImage from '../../Images/image-two.jpg';

const about = () => {
    return (
        <>
            <section className="about-section">
                <div className="about-container">
                    <div className="first-wrapper">
                        <div className="heading">
                            <h1>Boost your business now</h1>
                        </div>
                        <div className="text">
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos perferendis dolor eos necessitatibus commodi id temporibus, nihil mollitia consequatur magnam!</p>
                        </div>
                    </div>
                    <div className="second-wrapper">
                        <div className="icon-container container" >
                            <IoIosGlobe className="icon"/>
                            <h2>Our Mission</h2>
                        </div>
                        <div className="container">
                            <img src={coffeeImage} alt="" />
                        </div>
                        <div className="container">
                            <img src={computerImage} alt="" />
                        </div>
                        <div className="icon-container container">
                            <HiOutlineLightBulb className="icon"/>
                            <h2>Perfect Solution</h2>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default about
