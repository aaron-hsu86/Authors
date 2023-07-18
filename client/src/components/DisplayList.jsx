import React from 'react'
import { Link } from 'react-router-dom'
import DeleteButton from './DeleteButton'
import '../App.css'

const DisplayList = (props) => {

    const {authors, removeFromDom} = props;

    return (
        <>
        <p>We have quotes by:</p>
        <table>
            <tr>
                <th>Author</th>
                <th>Actions available</th>
            </tr>
            {authors.map((author,idx) => {
                return (
                <tr key={idx}>
                    <td>{author.name}</td>
                    <td>
                        <Link to={`/authors/${author._id}/edit`}><button>Edit</button></Link>
                        -|-
                        <DeleteButton removeInformation={()=> removeFromDom(author._id)}/>
                    </td>
                </tr>
                )
            })
            }
        </table>
        </>
    )
}

export default DisplayList