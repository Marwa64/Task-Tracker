import PropTypes from 'prop-types'

const Button = (props) => {
  return (
    <button onClick={props.onClick} className='btn'>
      {props.text}
    </button>
  )
}

Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func.isRequired
}

export default Button;
