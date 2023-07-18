import React, {useEffect, useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import DisplayForm from '../components/DisplayForm';

const Edit = () => {
    const [author, setAuthor] = useState('');
    const [nameErr, setNameErr] = useState('')
    const {id} = useParams();
    const navigate = useNavigate();

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/authors/${id}`)
            .then(res=>setAuthor(res.data))
            .catch(err=>console.log(err))
    },[])

    const updateAuthor = author => {
        axios.put(`http://localhost:8000/api/authors/${id}`, author)
            .then(res=>{
                // console.log(res)
                navigate('/authors')
            }).catch(err=>{
                console.log(err)
                setNameErr(err.response.data.message)
            })
    }

    return (
        <>
        <Link to={'/authors'}>Home</Link>
        <DisplayForm onSubmitProp={updateAuthor} initialName={author.name} nameErr={nameErr} />
        </>
    )
}

export default Edit