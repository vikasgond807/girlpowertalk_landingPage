import React from 'react'
import './Footer.module.css';
import logo from '../../assests/images/logo.png';

import { FaFacebook, FaTiktok } from 'react-icons/fa';
import { BsInstagram, BsYoutube, BsTwitter, BsTelephoneFill } from 'react-icons/bs';
import { GrLinkedin } from 'react-icons/gr';
import { AiOutlineMail } from 'react-icons/ai';


const Footer = () => {


    return (
        <div className='container'>
            <footer>

                <div className="sec-logo">
                    <img src={logo} />
                    <p className='footer-p-text'> “One girl empowers another. Let’s change lives together: one girl, one woman and one human being at a time.”
                    </p>

                    <ul className='Social-media-links'>
                        <li><a href='#'><BsInstagram /></a></li>
                        <li><a href='#'><GrLinkedin /></a></li>
                        <li><a href='#'><BsYoutube /></a></li>
                        <li><a href='#'><BsTwitter /></a></li>
                        <li><a href='#'><FaFacebook /></a></li>
                        <li><a href='#'><FaTiktok /></a></li>
                    </ul>


                </div>

                <div className="footer-quicklinks">
                    <h2>Quick Links</h2>
                    <ul>
                        {['About Us', 'Our Leaders', 'Our Values', 'Press', 'Events', 'Merch', 'Contact Us'].map((item) => (
                            <li key={item}>
                                <a href={`#${item}`}>
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="footer-companylinks">
                    <h2> Company</h2>
                    <ul>
                        {['Careers', 'Submit Your Story', 'Get Directions', 'Privacy Policy'].map((item) => (
                            <li key={item}>
                                <a href={`#${item}`}>
                                    {item}
                                </a>
                            </li>
                        ))}

                    </ul>

                </div>


                <div className="footer-contactus">

                    <h2>Reach Us</h2>

                    <ul className='contact-info'>
                        <li>
                            <span><AiOutlineMail /></span> <span>Email :info@girlpowertalk.com</span>
                        </li>

                        <li>
                            <span><BsTelephoneFill /></span>  <span>Phone :+91 7973931882</span>
                        </li>
                    </ul>



                </div>





            </footer>
            <div className="copyrightText">
                <p>Copyright 2021 GirlPowerTalk. All Rights Reserved  </p>
            </div>
        </div>


    )
}


{/* <div className="footer-container">

                <div className="heading-section">
                    <img className='logo' src={logo} alt='' />
                </div>

                <div className="company-description">
                    "One girl empowers another. Let's Change lives Together
                    : one girl one woman and one human being at a time".
                </div>

                <div className="phone-section">
                    Phone: +91 7973931882
                </div>

                <div className="email-section">
                    Email:info@girlpowertalk.com
                </div>
            </div>


            <div className="quick-links">
                <h2> About Us</h2>
                <ul>
                    {['About Us', 'Our Leaders', 'Our Values', 'Press', 'Events', 'Merch', 'Contact Us'].map((item) => (
                        <li key={item}>
                            <a href={`#${item}`}>
                                {item}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="company-links">
                <h2> Company</h2>
                <ul>
                    {['Careers', 'Submit Your Story', 'Get Directions', 'Privacy Policy'].map((item) => (
                        <li key={item}>
                            <a href={`#${item}`}>
                                {item}
                            </a>
                        </li>
                    ))}

                </ul>



            </div>


            <div className="button-container">
                <button type="button" class="btn btn-outline-success">Apply Now</button>
                <button type="button" class="btn btn-outline-success">Contact Us</button>
            </div> */}


export default Footer