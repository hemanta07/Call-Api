import React, { useEffect, useState } from "react";
import "./api.css";
const Api = () => {
  const [data, setData] = useState([]);
  const [sortType, setSort]=useState("")
  

  
  useEffect((sort) => {
    fetch("https://jsonplaceholder.typicode.com/users ").then((result) => {
      result.json().then((resp) => {
        console.log(resp);

        setData(resp);

     
        
      });
    });
  }, []);

  const sorted=data.sort((a,b)=>{
    const isReversed= 
    (sortType ==='ascending')? 1 :(sortType==='descending') ? -1 : null;
    return isReversed* a.name. localeCompare(b.name)
  
  })

  return (
    <div >
      <h3 className="h1">Get Api Call </h3>

      <div className="button">
     <button className="btn btn-primary "onClick={()=>setSort('ascending')}>ASC</button>
     <button className="btn btn-danger" onClick={()=>setSort('descending')}>DSC</button>
     </div>   
    
<div className="container">
      <table className="table1 table table-bordered ">
        <thead className="tbody1">
          <tr>
            <th className="th">ID</th>
            <th className="th1">Name</th>
            <th className="th1">UserName</th>
            <th className="th1">Email</th>
          </tr>
        </thead>
        

        <tbody>
          {sorted.map((sorted, index) => {
            return  (
              <tr key={index}>
                <td> {sorted.id} </td>
                <td> {sorted.name} </td>
                <td> {sorted.username} </td>
                <td> {sorted.email} </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default Api;
