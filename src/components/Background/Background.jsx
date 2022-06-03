import React, { useCallback, useEffect, useState } from 'react'

import './Background.css'


const Background = () => {

    const [alto, setAlto] = useState(document.body.clientHeight);

    const handleResize = useCallback(() => {
        setAlto(document.body.clientHeight);
    }, [])

    useEffect(() => {
        setAlto(document.body.clientHeight);

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [handleResize]);

    
    return (
        <div className="area">
            <ul className="circles" style={{ height: alto }}>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div >
    )
}

export default Background