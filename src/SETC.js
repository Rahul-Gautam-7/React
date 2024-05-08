import React,{useState,useEffect} from 'react';
import axios from 'axios';
import avatar from './image/avatar.jpg';

function SETC(props) {
    return (
        <div>
            <div className='container'>

                    <div className='border'>
                        <div className='row'>
                        
                            <div className='col-4 '>
                                <img src={avatar} />
                            </div> 

                            <div className='col-8'>
                                <h1>ID : {props.id}</h1>
                                <h1>USERNAME : {props.username}</h1>
                                <h1>NAME : {props.name} </h1>
                            </div>
                        </div>

                     </div>

            </div>

            
        </div>
    );
}

export default SETC;