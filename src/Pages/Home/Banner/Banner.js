import React from 'react';
import banner from '../../../img/banner.jpg';
const Banner = () => {
    return (
        <div>
            
                <div className="container">
                <div className="row g-3 d-flex justify-content-center align-items-center my-3 vh-100">
                    <div className="col-12 col-md-6 text-start">
                      <h1 className="text-primary text-uppercase fw-bolder "> 
                            A higher standard of <br/> care 
                            for your pets.
                          </h1>
                       <p className="fw-bold">Those were the days. And we know Flipper lives in a world full of wonder <br />flying there-under under the sea. The Love Boat soon will be making</p>
                        <button className="btn btn-primary">Know More</button>
                    </div>
                    <div className="col-12 col-md-6">
                       
                       <img className="w-100 img-fluid" src={banner} alt="" />
                    </div>
                </div>
            </div>
        
                </div>
               
    );
};

export default Banner;