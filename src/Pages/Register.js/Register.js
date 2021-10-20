import React, { useState } from 'react';
import img from '../../img/21378450.jpg'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import initFirebase from '../../firebase.init';
import useFirebase from '../../Hook/useFirebase';
initFirebase();
const Register = () => {
    const [email, setEmail]=useState('')
    const [pass, setPass]=useState('')
    const {createUser}= useFirebase()
    const auth = getAuth();
    const handleEmailChange=(e)=>{
        setEmail(e.target.value)
    }
    const handlePasswordChange=(e)=>{
        setPass(e.target.value)
       
    }
    const handleReg=(e)=>{
        e.preventDefault()

        createUserWithEmailAndPassword(auth, email, pass)
        .then((result) => {
            // Signed in 
            const user = result.user;
           createUser(user)
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
            console.log(errorCode, errorMessage)
          });
          
    }


    return (
        <div>
            
                
                <h2 className="text-center fw-bolder text-primary my-5"> Please Register</h2>
            

            <form onSubmit={handleReg}>
            
                <div className="row my-5 justify-content-center align-items-center ">


                   <div className="col-4 bg-warning rounded shadow-lg p-5">
                       <div className=" text-primary fw-bold mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input onBlur={handleEmailChange} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required/>
    
  </div>
  <div className="text-primary fw-bold mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input onBlur={handlePasswordChange} type="password" className="form-control" id="exampleInputPassword1" required/>
  </div>
  
  <button  type="submit" className="btn btn-primary my-3">Registrtion</button>
                   </div>
                   
                   <div className="col-4 ms-3 rounded shadow-lg">
                       <img className="w-50 img fluid" src={img} alt="" />
                       </div>    
                    
  </div>
  
</form>
        </div>
    );
};

export default Register;