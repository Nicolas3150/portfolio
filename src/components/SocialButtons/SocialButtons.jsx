import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

import './SocialButtons.css'

const SocialButtons = () => {
    const handleClick = (url) => {
        window.open(url,'_blank');
    }
    
    return (
        <div className='socialButtons'>
            <ul>
                <li onClick={() => handleClick('https://www.linkedin.com/in/nico-luna/') }><FontAwesomeIcon icon={faLinkedinIn} className="In"/></li>
                <li onClick={() => handleClick('https://github.com/Nicolas3150') }><FontAwesomeIcon icon={faGithub} className="Git" /></li>
            </ul>
            <div className='line'></div>
            <p>SCROLL DOWN</p>
        </div>
    )
}

export default SocialButtons