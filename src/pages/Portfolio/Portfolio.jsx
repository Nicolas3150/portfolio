import React from 'react'
import CardProyect from '../../components/CardProyect/CardProyect'

import './Portfolio.css'


const Portfolio = () => {
    return (
        <div className='portfolio' id='portfolio'>
            <h2>{`< PORTAFOLIO />`}</h2>
            {/* <p className='p'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias ad expedita officiis voluptas ea? Necessitatibus ratione deleniti consequatur, suscipit itaque iusto minus perspiciatis laborum vitae dolore quasi dolor sequi? Nam!</p> */}
            <div className='proyects'>
                    <CardProyect imageUrl={ 'https://github.com/Nicolas3150/padel-store-luna/raw/master/public/Gif1-github.gif'} 
                    namePage={ 'PADEL STORE' }
                    descriptionPage={'Ecommerce destinado a la venta de productos del deporte padel. Desarrollado utilizando Create React App.'}
                    gitUrl={ 'https://github.com/Nicolas3150/padel-store-luna.git' }
                    pageUrl={ 'https://padel-store-vercel.vercel.app/' }
                    />
                    <CardProyect imageUrl={ `${process.env.PUBLIC_URL}/proyects-img/tentaciones-minice.png` }
                    namePage={ 'TENTACIONES MINICE' }
                    descriptionPage={ 'Pagina estatica. Herramientas utilizadas: HTML5, CSS3, Botstrap y Sass' }
                    gitUrl={ 'https://github.com/Nicolas3150/TentacionesMinice.git' }
                    pageUrl={ 'https://tentacionesminice.000webhostapp.com/' }
                    />
                    <CardProyect imageUrl={`${process.env.PUBLIC_URL}/proyects-img/padel-world.png`}
                    namePage={ 'PADEL WORLD' }
                    descriptionPage={ 'Ecommerce destinado a la venta de productos de padel. Desarrollado con JavaScript' }
                    gitUrl={ 'https://github.com/Nicolas3150/Padel-World.git' }
                    pageUrl={ 'https://nicolas3150.github.io/Padel-World/' }
                    />
            </div>
        </div>
    )
}

export default Portfolio