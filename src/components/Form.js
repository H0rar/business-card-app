import React from 'react';
import FormElement from './FormElement';

const Form = ({ onChange, Values, onLogoUpload }) => {
  return (
    <section className='Form'>
      <h2>Enter your details</h2>
      <form onChange={onChange}>
        {Object.keys(Values).map((field, key) => (
          field !== 'Logo' && (
            <FormElement
              ID={field}
              Label={field}
              Value={Values[field]}
              key={key}
            />
          )
        ))}
      </form>
      <label>
        <strong>Upload Logo </strong>
        <input type="file" accept=".jpg,.png,.svg" onChange={onLogoUpload} />
      </label>
    </section>
  );
};

export default Form;
