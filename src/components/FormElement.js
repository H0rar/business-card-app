import React from 'react'

const textOnChange = () => {}
const FormElement = ({ID, Label, Value}) => {
  return (
    <label>
        <strong>{Label}</strong>
        <input type='text' name={ID} value={Value} onChange={textOnChange}/>
    </label>
  )
}

export default FormElement