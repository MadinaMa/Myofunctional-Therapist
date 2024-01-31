import { useContext, useEffect } from "react";
import { ColorContext } from "./Home";


function ThemeBG() {
    const myColor = useContext(ColorContext);
 
    useEffect(() => { 
        document.body.style.backgroundColor = myColor ? '#def3fa' : '#1cb2fb'; 
    
        }, [myColor]);

    return ( <div>
      
    </div>)
}

export default ThemeBG;