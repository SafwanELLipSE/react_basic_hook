import React, {useState} from 'react';

const Demo = () => {

    const [name,setName] = useState({
        country:"Bangladesh"
    })

    const change=()=>{
        setName({country: "India"})
    }


    return (
        <div>
            <h1>{name.country}</h1>
            <button onClick={change}>Change</button>
        </div>
    );
};

export default Demo;