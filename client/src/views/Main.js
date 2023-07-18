import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import DisplayList from '../components/DisplayList';

const Main = () => {

  const [authors, setAuthors] = useState();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:8000/api/authors')
      .then(res=>{
        // console.log(res)
        setAuthors(res.data)
        setLoaded(true)
      })
      .catch(err=>console.log(err))
  }, [])

  // remove author from list of authors saved to page
  const removeFromDom = authorID => {
    axios.delete(`http://localhost:8000/api/authors/${authorID}`)
        .then(res=>{
          console.log(res)
        }).catch(err=>console.log(err))
    // keep all authors NOT authorID
    setAuthors(authors.filter(author => author._id !== authorID));
  }

  return (
    <>
      <Link to={'/authors/new'}>Add an author</Link>
      {loaded && (<DisplayList authors={authors} removeFromDom={removeFromDom} />)}

    </>
  )
}

export default Main