import React, {useState} from 'react'
import axios from 'axios'
import DisplayForm from '../components/DisplayForm'
import { useNavigate, Link } from 'react-router-dom'

const New = () => {
    const navigate = useNavigate();
    const [nameErr, setNameErr] = useState('')

    const createAuthor = author => {
        axios.post(`http://localhost:8000/api/authors`, author)
            .then(res => {
                console.log(res)
                navigate('/authors')
            }).catch(err => {
                console.log(err)
                setNameErr(err.response.data.message)
            })
    }

    return (
        <>
        <Link to={'/authors'}>Home</Link>
        <p>Add a new author:</p>
        <DisplayForm onSubmitProp={createAuthor} initialName='' nameErr={nameErr} />
        </>
    )
}

export default New