

// const Greeting = (props) => {

import { useEffect, useState } from "react";

    
//     return (    
//     <p>Hello, {props.name}</p>
//     )
// }


const Greeting = (props) => { 
    const [name, setName] = useState(props.name)

    useEffect(() => {
        console.log("Component mounted");
        setTimeout(() => {
            setName("Aurelia")
        }, 3000);
    }, [])

    return (    
    <p>Hello, {name}</p>
    )
}


export default Greeting;