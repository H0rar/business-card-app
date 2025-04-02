import React, { useState } from 'react';
import Header from './Header';
import Form from './Form';
import Preview from './Preview';

const App = () => {
  const [Name, setName] = useState('');
  const [Designation, setDesignation] = useState('');
  const [Company, setCompany] = useState('');
  const [Adress, setAdress] = useState('');
  const [City, setCity] = useState('');
  const [Email, setEmail] = useState('');
  const [Phone, setPhone] = useState('');
  const [Logo, setLogo] = useState(null);

  const Values = {
    Name,
    Designation,
    Company,
    Adress,
    City,
    Email,
    Phone,
    Logo
  };

  const handleChange = (e) => {
    const setField = {
      setName,
      setDesignation,
      setCompany,
      setAdress,
      setCity,
      setEmail,
      setPhone
    };
    if (setField['set' + e.target.name]) {
      setField['set' + e.target.name](e.target.value);
    }
  };

  const handleLogoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setLogo(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className='App'>
      <Header Dark={true}>Professional Business Card Maker</Header>
      <main>
        <Form Values={Values} onChange={handleChange} onLogoUpload={handleLogoUpload} />
        <Preview Values={Values} />
      </main>
    </div>
  );
};

export default App;
