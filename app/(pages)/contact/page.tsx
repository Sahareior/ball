import React from 'react';
import './styles.css'; // Ensure the path matches where you put the styles.css

const Contact: React.FC = () => {
    return (
        <section className="contact-section -mt-14">
            <div className="">
                <div className="my-12">
                    <h2 className='text-4xl text-center font-bold text-yellow-400'>Contact Us</h2>
                    <p className='text-white font-bold mt-2 text-center'> Lorem Ipsum  whscrambled it to make a type specimen book.</p>
                </div>
            </div>
            <div className="containerr">
                <div className="row">
                    <div className="contact-info hidden md:block">
                        <div className="contact-info-item">
                            <div className="contact-info-icon">
                                <i className="fas fa-home"></i>
                            </div>
                            <div className="contact-info-content">
                                <h4>Address</h4>
                                <p>Lakurtola,<br/>Barguna Shader,Barguna<br/> 8700</p>
                            </div>
                        </div>
                        <div className="contact-info-item">
                            <div className="contact-info-icon">
                                <i className="fas fa-phone"></i>
                            </div>
                            <div className="contact-info-content">
                                <h4>Phone</h4>
                                <p>+88 01726369220</p>
                            </div>
                        </div>
                        <div className="contact-info-item">
                            <div className="contact-info-icon">
                                <i className="fas fa-envelope"></i>
                            </div>
                            <div className="contact-info-content">
                                <h4>Email</h4>
                                <p>sahareiors@gmail.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="contact-form mt-14 md:mt-0">
                        <form action="" id="contact-form">
                            <h2>Send Message</h2>
                            <div className="input-box">
                                <input type="text" required name="name" />
                                <span>Full Name</span>
                            </div>
                            <div className="input-box">
                                <input type="email" required name="email" />
                                <span>Email</span>
                            </div>
                            <div className="input-box">
                                <textarea required name="message"></textarea>
                                <span>Type your Message...</span>
                            </div>
                            <div className="input-box">
                                <input type="submit" value="Send" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
