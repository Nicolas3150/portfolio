import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

import { Link } from 'react-scroll'

import './Footer.css'

const Footer = () => {

    const handleClick = (url) => {
        window.open(url, '_blank');
    }

    return (
        <div className='footer'>
            <div className='footer-add'>
                <h4>{`< CONTACTAME />`}</h4>
                <ul>
                    <li><FontAwesomeIcon icon={faLinkedinIn} className="icon In"  onClick={() => handleClick('https://www.linkedin.com/in/nico-luna/')}/></li>
                    <li><FontAwesomeIcon icon={faGithub} className="icon Git"  onClick={() => handleClick('https://github.com/Nicolas3150')}/></li>
                </ul>
            </div>
            <div className='footer-links'>
                <h4>{ `< LINKS />` }</h4>
                <ul>
                    <li>
                        <Link smooth spy to="home">
                            INICIO
                        </Link>
                    </li>
                    <li>
                        <Link smooth spy to="about">
                            SOBRE MI
                        </Link>
                    </li>
                    <li><Link smooth spy to="portfolio">
                        PORTAFOLIO
                    </Link>
                    </li>
                    <li><Link smooth spy to="contact">
                        CONTACTO
                    </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Footer