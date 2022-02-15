import React, { useState } from 'react';
import './form.css'
  
function Form(props) {
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [age, setAge] = useState('');

  const areAllFieldsFilled=(firstname!=="")&&(lastname!=="")&&(age >0 && age<=99)


  
  
  const changeFirstName = (event) => {
    setFirstName(event.target.value);
    
  };
  
  const changeLastName = (event) => {
    setLastName(event.target.value);
  };
  const changeAge = (event) => {
    setAge(event.target.value);

  };
  
  const transferValue = (event) => {
    event.preventDefault();
    let val = {
      firstname,
      lastname,
      age
    };
    props.func(val);
    clearState();
  };
  
  const clearState = () => {
    setFirstName('');
    setLastName('');
    setAge('');
  };
  
  return (

    <div >
      <form >
      
      
      <input type="text" required={true} value={firstname}  required  placeholder='Firstname' onChange={changeFirstName}  maxLength='10'  /><br></br><br></br>
      
      
    
      <input type='text'  required={true}  value={lastname}  placeholder='Lastname' onChange={changeLastName}  maxLength='10' /><br></br><br></br>

      <input type="number"  required={true} min="1" max="99" value={age}   placeholder='Age' onChange={changeAge} maxLength='2' /><br></br><br></br>
     
      <button type="submit"  disabled={!areAllFieldsFilled} class="btn btn-success"  onClick={transferValue}>Add</button> 
      
      <button type="reset" class="btn btn-danger" onClick={clearState}>Reset</button>
  

      </form>
    
    </div>

    
  );
}
  
export default Form;
