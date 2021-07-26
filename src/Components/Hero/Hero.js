import React from 'react';
import '../Hero/Hero.css';
import HeroImg from '../../Images/hero.png';


const Hero = () => {
    return (
        <>
            <section className="hero-container">
                <div className="hero-text-container">
                    <div className="hero-heading">
                        <h1 className="first-heading">The perfect design</h1>
                        <h1 className="second-heading">for your website</h1>
                    </div>
                    <div className="hero-text">
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta porro aliquam velit ducimus eius </p>
                        <button className="hero-btn" type="button">try now</button>
                    </div>
                </div>
                <img src={HeroImg} alt="hero main" className="hero-image"/>
            </section>
        </>
    )
}

export default Hero
