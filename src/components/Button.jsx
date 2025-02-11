
import './Button.css'
import PropTypes from 'prop-types';

export default function Button({ label,buttonClass, click }) {
  return (
    <button className={`calc_button ${buttonClass}`} onClick={click}>{label}</button>
  )
}

Button.propTypes = {
  label: PropTypes.string.isRequired, // Define que 'label' é obrigatório e deve ser string
  buttonClass: PropTypes.string,
  click: PropTypes.func
};