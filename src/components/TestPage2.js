import React from 'react'
import {Link} from 'react-router-dom'
const TestPage2 = () => {
    return (
        <div style={{textAlign:'center'}}>
            <Link to="/"> Go Back To Home</Link>
            <h2>Checking React Router</h2>
            <p>Just a simple page to displaay working of routes</p>
        </div>
    )
}

export default TestPage2
