import React from 'react'

import './About.css'

const About = () => {
    return (
        <div className='about' id='about'>
            <h2>{`< `}SOBRE MI {` />`}</h2>
            <div className='description'>
                <h3>Nicolás Sebastián Luna</h3>
                <p>Soy estudiante de Ingeniería Informática y desarrollador Front End. Me encuentro formándome en
                    Back End con el objetivo de ser Full Stack Developer. Me considero capaz de resolver problemas
                    rápidamente, atento a los detalles y la calidad. Disfruto de aprender nuevas habilidades y
                    tecnologías. Mi objetivo profesional es formar parte de un equipo que me permita poner en práctica
                    mis conocimientos y me ofrezca la oportunidad  de desarrollarme profesional, personal
                    e intelectualmente.
                </p>
            </div>
            <div className='skills'>
                <h3>Habilidades</h3>
                <div className='skills-container'>
                    <div className='skill'>
                        <img src="https://cdn-icons-png.flaticon.com/512/732/732212.png" alt="HTML5" />
                        <span>HTML5</span>
                    </div>
                    <div className="skill">
                        <img src="https://cdn-icons-png.flaticon.com/512/732/732190.png" alt="CSS3" />
                        <span>CSS3</span>
                    </div>
                    <div className="skill">
                        <img src="https://getbootstrap.com/docs/5.2/assets/brand/bootstrap-logo-shadow.png" alt="Bootstrap" />
                        <span>Bootstrap</span>
                    </div>
                    <div className="skill">
                        <img src="https://cdn-icons-png.flaticon.com/512/5968/5968358.png" alt="" />
                        <span>SASS</span>
                    </div>
                    <div className="skill">
                        <img src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png" alt="" />
                        <span>JavaScript</span>
                    </div>
                    <div className="skill">
                        <img src="https://img.icons8.com/color/344/react-native.png" alt="" />
                        <span>React JS</span>
                    </div>
                    <div className="skill">
                        <img src="https://img.icons8.com/fluency/344/node-js.png" alt="" />
                        <span>Node.js</span>
                    </div>
                    <div className="skill">
                        <img src="https://img.icons8.com/color/344/firebase.png" alt="" />
                        <span>Firebase</span>
                    </div>
                    <div className="skill">
                        <img src="https://img.icons8.com/color/344/git.png" alt="" />
                        <span>GIT</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About