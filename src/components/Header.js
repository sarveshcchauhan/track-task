import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

// you can destructure props by using '{}' eg props.title => we can use directly {title}
//destructuring allows us to pass all props as a parameter
const Header = ({title,otherTitle,versionNo, onAdd,showAdd}) => {

    return (
        <div className="header">
            <h2>{title}</h2>
            {showAdd === true ? 
                <Button bgColor="#e74c3c" textColor="#ecf0f1" text="Close Task" onClick={onAdd} />
                : 
                <Button bgColor="#2c3e50" textColor="#ecf0f1" text="Add Task" onClick={onAdd} /> 
            }
            
            {/* <h3>{otherTitle}</h3>
            <h4>{versionNo}</h4> */}
        </div>
    )
}
//You can pass default props to funtion
// Header.defaultProps = {
//     otherTitle :'Title from Header File'
// }

//propsType is used to validate props if the data passed to props does'nt match the datatypes then it will display console error
// Header.propTypes={
//     versionNo:PropTypes.string.isRequired
// }

export default Header;
