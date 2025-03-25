import React from 'react'
import FormElement from './FormElement'

const Form = () => {
  return (
    <section className='Form'>
        <h2>Enter your details</h2>
        <form>
            <FormElement ID='Name' Label='Name' />
            <FormElement ID='Designation' Label='Designation' />
            <FormElement ID='Company' Label='Company' />
            <FormElement ID='Address' Label='Address' />
            <FormElement ID='City' Label='City' />
            <FormElement ID='Email' Label='Email' />
            <FormElement ID='Phone' Label='Phone' />
        </form>
    </section>
  )
}

export default Form