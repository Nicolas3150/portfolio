import React from 'react'

import './CardProyect.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'


const CardProyect = ({ imageUrl, namePage, descriptionPage, gitUrl}) => {
    const handleClick = (url) => {
        window.open(url,'_blank');
    }

    return (
        <div className="property-card">
            <a href ="./#">
                <div className="property-image" style={{ backgroundImage: `url(${ imageUrl })` }}></div>
            </a>
            <div className="property-description">
                <div className='title-git'>
                    <h4> {namePage} </h4>
                    <FontAwesomeIcon icon={faGithub} className="icon" onClick={() => handleClick(gitUrl) }/>
                </div>
                <p>{descriptionPage}</p>
            </div>
        </div>
    )
}

export default CardProyect