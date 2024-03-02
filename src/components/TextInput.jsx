//[✅]Importações
import PropTypes from 'prop-types'

//[✅]Definir proptypes
TextInput.propTypes = {
    id:PropTypes.string,
    label: PropTypes.string,
    value: PropTypes.string,
    setValue: PropTypes.func
}

//[✅]Função de input de texto
export default function TextInput({ id, label, value, setValue }) {
    
    return (
        <div>
          <label htmlFor={id}>{label}</label>
          <input 
            type="text" 
            name={id} 
            id={id}
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
    )
}