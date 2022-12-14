import React from 'react'
import './Footer.scss';
import logo from '../../assests/images/logo.png';


const Footer = () => {
    return (
        <div className='container'>


            <div className="footer-container">

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
            </div>


        </div>
    )
}


export default Footer