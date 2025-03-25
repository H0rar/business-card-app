import React from 'react'
import FormElement from './FormElement'

const Form = () => {
  return (
    <section className='Form'>
        <h2>Enter your details</h2>
        <form>
          {['Name', 'Designation', 'Company', 'Address', 'City', 'Email', 'Phone'].map((field, key) => (
            <FormElement ID={field} Label={field} key={key} />
          ))}
            
        </form>
    </section>
  )
}

export default Form