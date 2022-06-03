import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import SocialButtons from '../../components/SocialButtons/SocialButtons'

import './Home.css'

const Home = () => {
  return (
    <div className='Home' id='home'>
      <NavBar />
      <div className='myInfo'>
        <img src='https://lh3.googleusercontent.com/a-/AOh14Gg2HjozW07IOQ8TgGCO61TQyMq421TuoRxdSIHfaQ=s317-p-rw-no' alt="no hay nada ja" />
        <h1>Hola, soy <span className='name'>Nicolás Luna👋</span></h1>
        <h2>{ `< Junior Front-End Developer />` } </h2>
        <h3>Apacionado de la informatica y la programación. Siempre atendo a la calidad y el detalle.</h3>
      </div>
      <SocialButtons />
    </div>
  )
}

export default Home