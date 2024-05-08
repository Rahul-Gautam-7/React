
import axios from 'axios';
import './App.css';
import { useEffect,useState } from 'react';
import SETC from './SETC.js';

function App() {

    // const [rec,setrec]=useState("");

  

    // axios.get('https://jsonplaceholder.typicode.com/users')
    // .then((response)=>{
    //     console.log(response.data)
    // })

    const data =[
      {
        "id":1,
        "name":"Rahul Gautam",
        "username":"rahul7"
      },

      {
        "id":2,
        "name":"Vidhey Gadara",
        "username":"vidhey9"
      },

      {
        "id":3,
        "name":"Yuvraj Tammata",
        "username":"yuvraj18"
      },

      {
        "id":3,
        "name":"Vatsal Jogi",
        "username":"jogi11"
      },
    ]

  return (
    <div className="App">
      
    {
      data.map(function(list){
        return <SETC name={list.name} username={list.username} id={list.id} />
      })
    }
    
    </div>
  );
}

export default App;
