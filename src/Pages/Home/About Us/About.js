import React from 'react';
import aboutimg from '../../../img/doctor-looking-pet-closely.jpg'
const About = () => {
    return (
        <div id="about" className="container vh-100">
            <div  className="col-12 text-center text-primary  my-5">
                   <h2 className="text-primary mt-5 pt-5 fw-bolder">==About Us==</h2> 
                </div>
            
                <div className="row g-3 d-flex justify-content-center align-items-center my-3 ">
                    <div className="col-12 col-md-6 text-start">
                        <h1 className="text-success fw-bold">Welcome to Pet Vet  Hospital</h1>
                        <p className="fw-bold pt-3 ">Our unique animal care service offers full-service pet care for pet owners that demand loving care for their pets and confidence that they leave their pets in a safe environment.</p>

                        <p className="fw-bold  ">We can guarantee a safe, secure and caring environment for your pet for both long and short term.
                        </p>
                    </div>
                    <div className="col-12 col-md-6">
                        <img className="w-75 img-fluid rounded shadow-lg" src={aboutimg} alt="" />
                    </div>
                </div>

                <div className="row g-3 d-flex  my-5 ">
                    <div className="col-md-3 col-12 ">
                        <h2 className="text-primary text-center bg-warning rounded-3 mr-3 p-3">
                            230+ <br />
                            Specialised Bed 
                        </h2>
                    </div>
                    <div className="col-md-3 col-12   ">
                    <h2 className="text-primary bg-warning rounded-3 text-center p-3">
                            25+ <br />
                            Expert Doctor
                        </h2>
                    </div>
                    <div className="col-md-3 col-12 ">
                    <h2 className="text-primary text-center bg-warning rounded-3 p-3">
                            24/7 <br />
                            Indoor Service
                        </h2>
                    </div>
                    <div className="col-md-3 col-12 ">
                    <h2 className="text-primary text-center bg-warning rounded-3 p-3">
                            24/7 <br />
                            Ambulence Service
                        </h2>
                    </div>
                </div>

            </div>
       
    );
};

export default About;