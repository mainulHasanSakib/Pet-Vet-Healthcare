import React from 'react';
import { Link } from 'react-router-dom';

const Ambulence = () => {
    return (
        <div>
             <div id="about" className="container vh-100">
             <div  className="col-12 text-center text-primary  my-5">
                   <h2 className="text-primary mt-5 pt-5 fw-bolder">==Call For Ambulence==</h2> 
                </div>
                <div className="row g-3 d-flex justify-content-center align-items-center my-3 ">
                    <div className="col-12 col-md-6 text-start">
                        <h1 className="text-success fw-bold">Welcome to Pet Vet  Hospital</h1>
                        <h1 className="text-warning fw-bold">24/7 Ambulence Service</h1>
                        <h1 className="text-warning fw-bold">Service Cost:$50</h1>
                        

                        <p className="fw-bold  ">We can guarantee a safe, secure and caring Ambulence Service for your pet for both long and short term.
                        </p>
                        <p className="fw-bold  ">Contact: 00 971 8984 78978
                        <br />Address:2/55,Akbar Shah, Chittagong
                        </p>
                        <Link to={"/ambulence"}>
            <button className="btn btn-primary m-3">Call Ambulence </button>
        </Link>
                        <Link to={"/doctor"}>
            <button className="btn btn-primary m-3">Call Doctor </button>
        </Link>
</div>
                    <div className="col-12 col-md-6">
                        <img className="w-75 img-fluid rounded shadow-lg" src="https://th.bing.com/th/id/R.688c2000669340a594e43d98c2c50ccf?rik=wGm0ktyDHfARUg&riu=http%3a%2f%2fimg.gawkerassets.com%2fimg%2f18pw3z82s2xoyjpg%2foriginal.jpg&ehk=kYal1qOtWd3IWxIjtq2CGlY65r9rHxIUB1sKkl6Lcoc%3d&risl=&pid=ImgRaw&r=0" alt="" />
                    </div>
                </div>
             </div>
        </div>
    );
};

export default Ambulence;