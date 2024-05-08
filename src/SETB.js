import React,{useState,useEffect,useRef} from 'react';
import avatar from './image/avatar.jpg';
import phone from './image/Phone.png';
import msg from './image/msg.jpg';
import gmail from './image/gmail.png';

function SETB(props) {
    return (
        <div>
            
            <div className='container-fluid'>

                <div className='row'>
                    <div className='col-1'>
                            <img src={avatar} className='rounded-circle border border-black mt-3' />

                    </div>
                    <div className='col-2 mt-5 mx-5 '>
                                <h1> {props.name}</h1>
                                <h5>{props.birth}</h5>
                    </div>
                    <div className='col-2 mt-5'>
                                <img src={phone} className='rounded-circle mx-1' style={{ height:'35px' }} />
                                <img src={msg} className='rounded-circle mx-1' style={{ height:'45px' }} />
                                <img src={gmail} className='rounded-circle mx-1' style={{ height:'45px' }} />

                    </div>
                    

                </div>

            </div>






        </div>
    );
}

export default SETB;