
import axios from 'axios';
import './App.css';
import { useEffect,useState } from 'react';
import SETC from './SETC.js';
import SETB from './SETB';


function App() {

  const [lst,setlst] = useState([])

    //set c

    // const data =[
    //   {
    //     "id":1,
    //     "name":"Rahul Gautam",
    //     "username":"rahul7",
    //     "birth":"17/10/2001"
    //   },

    //   {
    //     "id":2,
    //     "name":"Vidhey Gadara",
    //     "username":"vidhey9",
    //     "birth":"1/9/2002"
    //   },

    //   {
    //     "id":3,
    //     "name":"Yuvraj Tammata",
    //     "username":"yuvraj18",
    //     "birth":"23/5/2000"
    //   },

    //   {
    //     "id":3,
    //     "name":"Vatsal Jogi",
    //     "username":"jogi11",
    //     "birth":"9/7/2003"
    //   },
    // ]

    axios.get('https://jsonplaceholder.typicode.com/users')
    .then((response)=>{
      setlst(response.data)
    })

  return (
    <div className="App">
      
      {/* set c */}

    {/* {
      data.map(function(list){
        return <SETC name={list.name} username={list.username} id={list.id} />
      })
    } */}


    {/* Set B */}

    {
      lst.map((data,index)=>{
        return <div key={index}>
        <SETB name={data.name} email={data.email} />
        </div>
      })
    }
   







    
    </div>
  );
}

export default App;
