import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Clouds from 'vanta/dist/vanta.clouds.min';
import * as THREE from 'three';


const Welcome = ({children}) => {
    const myRefDiv = useRef(null);
    const [vanta, setVanta] = useState(0)

    // En la primera renderizacion "myRefDiv.current" es igual
    // a nulo, el valor inicial (const myRefDiv = useRef(null))

    useEffect(() => {

        // Solo pasa una vez por dentro del if
        // SOLO PASA UNA VEZ
        // Aca se activa el efecto "cloud"
        if(!vanta){
            setVanta(Clouds({
                THREE, 
                el: myRefDiv.current
            }));
        }

        // Al salir de la pantalla debemos detener el efecto
        // y des-asociar todos los recursos 
        // Dentro de esta funcion se va a realizar la tarea para des-asociar los recursos
        return () => {
            if(vanta){
                vanta.destroy()
            }
        }

    }, [vanta]); // Con esto me aseguro que funcione bien el useEffect 

    return (
        <div className="full" ref={myRefDiv}>
            {children}
        </div>
    );
};

Welcome.propTypes = {
    children: PropTypes.node
};

export default Welcome;