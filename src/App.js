import './App.css';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';

function App() {
  const [data,setdata] = useState([]);
  const fetchData = () =>{
    axios.get("http://localhost:1234/getData").then((res)=>{
      setdata(res.data.data.map((val)=>{
        return <tr key={val._id}><td>{val.name}</td><td>{val.shortname}</td><td><button onClick={()=>deleteRow(val._id)}>Del</button></td></tr>
      }))
    })
  }

  const deleteRow = (id) =>{
    alert(id);
  }

  useEffect(()=>{
    fetchData();
  },[]);

  return (
    <div className="App container">
    <br/>
    <table className='table table-striped'>
      <thead>
        <tr>
        <th>City Name</th>
        <th>City Code</th>
        <th>Action</th>
        </tr>
       
      </thead>
      <tbody>
        {
          data
        }
      </tbody>
    </table>
    </div>
  );
}
export default App;
