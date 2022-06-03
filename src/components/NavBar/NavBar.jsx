import React, { useCallback, useEffect, useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'

import { faBars } from '@fortawesome/free-solid-svg-icons'

import { Link } from 'react-scroll'

import './NavBar.css'

const NavBar = () => {
  const [y, setY] = useState(window.scrollY);
  const [scrolling, setScrolling] = useState(true);
  const [clicked, setClicked] = useState(false);
  const [clase, setClass] = useState('');

  const handleNavigation = useCallback(
    e => {
      const window = e.currentTarget;
      if (y > window.scrollY) {
        setScrolling(true);
      } else if (y < window.scrollY) {
        setScrolling(false);
      }
      setY(window.scrollY);
    }, [y]
  );

  useEffect(() => {
    setY(window.scrollY);
    window.addEventListener("scroll", handleNavigation);

    return () => {
      window.removeEventListener("scroll", handleNavigation);
    };
  }, [handleNavigation]);

  const handleClick = () => {
    window.open('https://drive.google.com/file/d/1uNHaBPmQyoHFhWNrKOccQ_uGxv0otY91/view?usp=sharing', '_blank');
  }

  const handleNavbarClicked = () => {
    setClicked(!clicked);
  }

  useEffect(() => {
    let clase = '';
    scrolling ? (y <= 250 ? clase += 'navbar up b' : clase += 'navbar up') : clase += 'navbar down';
    clicked ? clase += ' active' : clase += '';
    setClass(clase);
  }, [clicked, scrolling, y]);

  return (
    <>

      <div className={clase}>
        <button onClick={handleClick}>
          <FontAwesomeIcon icon={faDownload} /> Descargar CV
        </button>
        <FontAwesomeIcon icon={faBars} className="bar-icon" onClick={handleNavbarClicked} />
        <ul>
          <li>
            <Link onClick={ handleNavbarClicked } activeClass='nav-active' smooth spy to="home">
              INICIO
            </Link>
          </li>
          <li>
            <Link onClick={ handleNavbarClicked } activeClass='nav-active' smooth spy to="about">
              SOBRE MI
            </Link>
          </li>
          <li>
            <Link onClick={ handleNavbarClicked } activeClass='nav-active' smooth spy to="portfolio">
              PORTAFOLIO
            </Link>
          </li>
          <li>
            <Link onClick={ handleNavbarClicked } activeClass='nav-active' smooth spy to="contact">
              CONTACTO
            </Link>
          </li>
        </ul>
      </div>
      {clicked ? <div className='block'></div> : <></>}
    </>
  )
}

export default NavBar