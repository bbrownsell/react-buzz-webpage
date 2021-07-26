import React from 'react';
import './../Form/Form.css';

const Form = () => {
    return (
        <>
            <section className="form-section">
                <div className="form-container">
                    <h3>Contact us at: </h3>
                    <p>350 South View, New York, NY 10101</p>
                    <p>0123456789</p>
                    <a href="mailto: contact@email.com">contact@email.com</a>
                    <div className="form">
                        <form action="">
                            <input type="text" placeholder="Name"/>
                            <input type="email" placeholder="Email"/>
                            <input type="text" placeholder="Message" className="message"/>
                            <button type="submit" className="form-btn">Submit</button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Form
