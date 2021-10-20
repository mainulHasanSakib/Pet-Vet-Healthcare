import React, { useState } from 'react';
import img from '../../img/21378450.jpg'
import { Link } from 'react-router-dom';
import useAuth from '../../Hook/useAuth';
import useFirebase from '../../Hook/useFirebase';
import { getAuth } from '@firebase/auth';

const Login = () => {
    const { signInUsingGoogle, signInWithEmailAndPassword } = useAuth();
    const [email, setEmail]= useState('')
    const [pass, setPass]=useState('')
    const {setUser}= useFirebase()
    const auth = getAuth();
    const handleEmailChange=(e)=>{
        setEmail(e.target.value)
    }
    const handlePasswordChange=(e)=>{
        setPass(e.target.value)
       
    }
    const handlelogin=(e)=>{
        signInWithEmailAndPassword(auth, email, pass)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    setUser(user)
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode, errorMessage)
  });

       
    }



    return (
        <div>
            <h2>Please Login</h2>
            <div className="row my-5 justify-content-center align-items-center ">


<div className="col-4 bg-warning rounded shadow-lg p-5">
<form onSubmit={handlelogin}>
            
           


              
                   <div className=" text-primary fw-bold mb-3">
<label for="exampleInputEmail1" class="form-label">Email address</label>
<input onBlur={handleEmailChange} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required/>

</div>
<div className="text-primary fw-bold mb-3">
<label for="exampleInputPassword1" className="form-label">Password</label>
<input onBlur={handlePasswordChange} type="password" className="form-control" id="exampleInputPassword1" required/>
</div>

<button  type="submit" className="btn btn-primary my-3">Login</button>
              
               
               
                


</form>
</div>

<div className="col-4 ms-3 rounded shadow-lg">
    <img className="w-50 img fluid" src={img} alt="" />
    </div>    
 
</div>
<p>New Pet Patient? <Link to="/reg">Create Account</Link></p>
            <button onClick={signInUsingGoogle} className="btn btn-warning my-3">Google Sign In</button>
        </div>
    );
};

export default Login;