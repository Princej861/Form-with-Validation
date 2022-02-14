import React, { useState } from 'react';
import Form from './form';
import jsonData from './data.json'
  
function Table() {
  const [customerData, setcustomerData] = useState(jsonData);
  
  const tableRows = customerData.map((info) => {
    return (
      <tr>
      
        <td>{info.firstname}</td>
        <td>{info.lastname}</td>
        <td>{info.age}</td>
      </tr>
    );
  });
  
  const addRows = (data) => {
    // const totalCustomers = customerData.length;
    // data.id = totalCustomers + 1;
    const updatedcustomerData = [...customerData];
    updatedcustomerData.push(data);
    setcustomerData(updatedcustomerData);
  };
 
  return (
    
    <div>
    
  <table class="table table-success table-striped">
        <thead>
          <tr>
            
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>{tableRows}</tbody>
      </table>
      <Form func={addRows} />
    </div>
  );
}
  
export default Table;


