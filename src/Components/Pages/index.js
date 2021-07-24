import React from 'react'
import Cards from '../Cards/Cards';
import Hero from '../Hero/Hero';
import About from '../About/About';
import Meet from '../Meet/Meet';
import Info from '../Info/Info';
import Form from '../Form/Form';
import Blog from '../Blog Section/Blog';

const Home = () => {
    return (
        <>
            <Hero/>
            <Cards/>
            <About/>
            <Meet/>
            <Info/>
            <Blog/>
            <Form/>
        </>
    )
}

export default Home;
