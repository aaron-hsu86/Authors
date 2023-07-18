import React from 'react'

export default props => {
    const { removeInformation } = props
    return (
        <button onClick={removeInformation}>Delete</button>
    )
}