import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';


const Appoint = () => {
    const { serviceId  } = useParams();
    const [services, setServices]=useState([]);
   
    useEffect(()=>{
        fetch("/services.JSON")
        .then((res)=>res.json())
        .then((data)=>setServices(data))
    } ,[])


    const foundService = services.find((service)=>service.id == serviceId )
   
   

    
    return (
        <div className="row d-flex  justify-content-center  ">
           
            <div className="col-md-4">
                <h2 className="text-primary fw-bolder my-5">  Service Name: {foundService?.name} </h2>
        <h2 className="text-primary fw-bolder my-5">  Service Fee: $ {foundService?.fee} </h2>
        <h2 className="text-primary fw-bolder my-5">  Appointment With: {foundService?.doctor} </h2>
                </div>
        
                <div className="col-md-4">
                    <img className="w-50 img-fluid border-primary" src={foundService?.img} alt="" />
                </div>
        
        </div>
    );
};

export default Appoint;