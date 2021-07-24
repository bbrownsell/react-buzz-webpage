import React from 'react';
import './../Blog Section/Blog.css';
import ImageOne from '../../Images/girl-one.jpg';
import ImageTwo from '../../Images/girl-two.jpg';

const Blog = () => {
    return (
        <>
            <section className="blog-section">
                <div className="blog-container">
                    <div className="blog-wrapper">
                        <div className="blog">
                            <h2>10 Trends</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat asperiores.</p>
                        </div>
                        <div className="blog blog-white">
                            <h2>Lifestyle</h2>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati ipsam.</p>
                        </div>
                        <div className="blog blog-white">
                            <h2>Beauty</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat molestiae.</p>
                        </div>
                        <div className="blog">
                            <h1>Best Fashion Bloggers</h1>
                        </div>
                    </div>
                    <div className="image-wrapper">
                        <img src={ImageOne} alt="" className="blog-image-one"/>
                        <img src={ImageTwo} alt="" className="blog-image-two"/>
                    </div>
                    <div className="blog-link">
                        <p>Images from <a href="http://www.freepik.com" target="_blank" rel="noreferrer">Freepik</a></p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Blog
