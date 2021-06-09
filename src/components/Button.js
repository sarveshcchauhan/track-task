import PropTypes from 'prop-types'

const Button = ({bgColor, text, textColor,onClick, styler = null}) => {
    return (
    <button 
        className={`btn ${styler}`} 
        style={{backgroundColor:bgColor,color:textColor}}  
        onClick={onClick}
    >
    {text}
    </button>
    )
}

Button.propTypes={
    bgColor:PropTypes.string,
    text:PropTypes.string,
    textColor:PropTypes.string,
    onClick:PropTypes.func
}

export default Button
