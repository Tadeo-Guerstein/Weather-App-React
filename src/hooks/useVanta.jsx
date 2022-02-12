import { useRef, useEffect, useState } from 'react';
import Clouds from 'vanta/dist/vanta.clouds.min';
import * as THREE from 'three';

const useVanta = () => {
    const myRefDiv = useRef(null);
    const [vanta, setVanta] = useState(0)
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
    return myRefDiv
}

export default useVanta