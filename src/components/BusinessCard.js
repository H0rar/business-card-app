import React from 'react'

const BusinessCard = ({ Values }) => {
    const { Name, Designation, Company, Adress, City, Email, Phone } = Values;
    return (
      <article className="BusinessCard">
        <h3>{Name}</h3>
        <p>{Designation}</p>
        <p className="company">{Company}</p>
        <p>{Adress}</p>
        <p>{City}</p>
        <p>{Email}</p>
        <p>{Phone}</p>
      </article>
    );
  };

export default BusinessCard