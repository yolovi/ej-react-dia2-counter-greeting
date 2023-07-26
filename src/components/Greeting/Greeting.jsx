import { useEffect, useState } from "react";

const Greeting = (props) => { 
    const [name, setName] = useState(props.name)

    useEffect(() => {
        console.log("Component mounted");
        setTimeout(() => {
            setName("Alfonsina")
        }, 3000);
    }, [])

    return (    
    <p>Hello, {name}</p>
    )
}


export default Greeting;