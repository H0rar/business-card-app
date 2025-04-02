import React from 'react';

const BusinessCard = ({ Values }) => {
  const { Name, Designation, Company, Adress, City, Email, Phone, Logo } = Values;

  return (
    <article className='BusinessCard'>
      {Logo && <img src={Logo} alt="Company Logo" className="business-logo" />}
      <h3>{Name}</h3>
      <p>{Designation}</p>
      <p className='company'>{Company}</p>
      <p>{Adress}</p>
      <p>{City}</p>
      <p>{Email}</p>
      <p>{Phone}</p>
    </article>
  );
};

export default BusinessCard;
