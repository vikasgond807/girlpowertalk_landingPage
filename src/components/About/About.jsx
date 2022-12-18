import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './About.scss';


const About = () => {
    const abouts = [
        { title: 'Women in Technology', description: 'Im a React Developer', ImgUrl:''},
        { title: 'Diversity & Inclusion', description: 'Im a React Developer', ImgUrl: '' },
        { title: 'Entrepreurial Culture', description: 'Im a React Developer', ImgUrl: '' },
        { title: 'Generate Impact', description: 'Im a React Developer', ImgUrl: '' },


    ]
    return (
        <div>
            <div className="text-container">
                <h2 className='head-text'> <span>#WE ARE <span style={{color:'red'}}>GIRLPOWERTALK</span></span>

                </h2>
            </div>


            <div className="app__profiles">

                {abouts.map((about, index) => (
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.5, type: 'tween' }}

                        className='app__profile-item'
                        key={about.title + index}
                    >
                        <img src={about.ImgUrl} alt={about.title} />

                        <h2 className='bold-text' style={{ marginTop: 20 }}>{about.title}</h2>
                        <p className='p-text' style={{ marginTop: 20 }}>{about.description}</p>

                    </motion.div>
                ))}

            </div>
        </div>
    )
}

export default About