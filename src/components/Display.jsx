
import PropTypes from 'prop-types';
import './Display.css'
export default function Display({value}) {
  return (
    <div className='calc_display'>{value}</div>
  )
}

Display.propTypes = {
    value: PropTypes.number.isRequired, // Define que 'label' é obrigatório e deve ser string
};