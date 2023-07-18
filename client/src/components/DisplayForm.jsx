import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

export default props => {
    const { initialName, onSubmitProp, nameErr } = props
    const [name, setName] = useState(initialName);

    // update name value when axios call gets author info
    useEffect(()=>{
        setName(initialName)
    }, [initialName])

    const onSubmitHandler = e => {
        e.preventDefault();
        onSubmitProp({name});
        setName('');
    }

    return (
        <form onSubmit={onSubmitHandler}>
            <label>Name</label><br />
            <input 
                type="text" 
                name="name" value={name} 
                onChange={(e) => { setName(e.target.value) }} />
            <Link to={'/authors'}><button>Cancel</button></Link>
            =|=
            <input type="submit" />
            {nameErr?<p>{nameErr}</p>
            :<></>
            }
        </form>
    )
}