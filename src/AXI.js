import axios from 'axios';
import React,{useState,useEffect} from 'react';

function AXI(props) {

    const [list,setlist] =useState([]);

    axios.get('https://jsonplaceholder.typicode.com/users')
    .then((response)=>{
        setlist(response.data);
    })


        // fetch('https://swapi.py4e.com/api/films').then((response) => {
        //     return response.json();
        // }).then((response) => {
        //     const data = response;
        //     setlist(data.results);
        //     console.log(data.results);
        // });
    



    return (
        <div>
            {
              list.map((data,index) => {
                return <div key={index}>
                    {data.name}
                    </div>
              }
            )
            }

            
        </div>
    );
}

export default AXI;