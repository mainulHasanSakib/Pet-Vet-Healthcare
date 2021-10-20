import React, { useEffect, useState } from 'react';
import Service from './Service';

const Services = () => {
    const[services, setServices]=useState([]);
    useEffect(() => {
        fetch('services.JSON')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <div id="services">
        <h2 className="text-primary fw-bolder py-5 mt-5">==Our Services==</h2>
        <div className="container">
            <div className="row d-flex">
                {
                services.map(service => <Service
                    key={service.id}
                    service={service}
                > </Service>)
            }
            </div>
            
        </div>
    </div>
    );
};

export default Services;
