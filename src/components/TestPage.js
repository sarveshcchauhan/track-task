import React from 'react'
import { Link } from 'react-router-dom'
const TestPage = () => {
    return (
        <footer>
            <h4>Router Page</h4>
            <Link to="/testPage2" >Click To Switch Page</Link>           
        </footer>
    )
}

export default TestPage
