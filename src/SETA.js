import React,{useState,useEffect,useRef} from 'react';
import avatar from './image/avatar.jpg';

function SETA(props) {

        let col;
    const [Name,setName]=useState("");
    const [Gender,setGender]=useState("");
    const [Contact,setContact] = useState("");
    const [Color,setColor] = useState("cyan");

   
         let handleSubmit=()=>{
            alert( `Congrats on submission of  form ${Name}`)          
        }

      
  
    return (

        <div>
            <div className='container-fluid'>
            
                <div className='row'>
                    <div className='col-6'>

                    <form onSubmit={handleSubmit}>
                        <div class="mb-3">
                            <label  class="form-label">Name</label>
                            <input type="text" value={Name} onChange={(e)=>setName(e.target.value)} class="form-control" / >
                        </div>

                        <div class="mb-3">
                            <label  class="form-label">Gender</label>
                            <input type="text" class="form-control"  value={Gender} onChange={(e)=>setGender(e.target.value)} / >
                        </div>


                        <div class="mb-3">
                            <label  class="form-label">Contact</label>
                            <input type="text" class="form-control"  value={Contact} onChange={(e)=>setContact(e.target.value)} / >
                        </div>
  
                            <button type="submit" class="btn btn-primary">Submit</button>
                    </form>


                    </div>


                {/* Display */}

                    <div className='col-6'>
                        <div {...Gender === 'male' ?col='#F8C794':col='white'}  style={{ background:col , border: 'solid 5px' }} className='text-center'>

                        <img src={avatar} />

                        <h1>
                           Name:  {Name}
                        </h1>

                        <h1>
                           Gender:  {Gender}
                        </h1>

                        <h1>
                           Contact:  {Contact}
                        </h1>
                        </div>
                    </div>

                </div>

            </div>


        </div>
    );
}

export default SETA;