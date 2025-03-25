import React, { useState }  from "react";
import Header from "./Header";
import Form from "./Form";
import Preview from "./Preview";


const App = () => {
  const [Name, setName] = useState("");
  const [Designation, setDesignation] = useState("");
  const [Company, setCompany] = useState("");
  const [Adress, setAdress] = useState("");
  const [City, setCity] = useState("");
  const [Email, setEmail] = useState("");
  const [Phone, setPhone] = useState("");
  const Values = {
    Name,
    Designation,
    Company,
    Adress,
    City,
    Email,
    Phone
  };
  return  (
    <div className="App">
      <Header Dark={true}>Professional Business Card Maker</Header>
      <main> 
      <Form Values={Values}/>
      <Preview  />
      </main>
    </div>
  );
};

export default App;