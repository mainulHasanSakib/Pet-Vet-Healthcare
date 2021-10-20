import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css'
const Service = ({service}) => {
    const { id, name, doctor, what, img, fee } = service;
    return (
        <div className="col-md-4 py-3 my-3">
            <Card className="shadow-lg">
            <Card.Img className="topimg" variant="top" src={img} />

        {/* <img className="w-100 h-75 img-fluid shadow-lg rounded-3"  alt="" /> */}
        <h3 className="text-primary mt-2">{name}</h3>
        <h3 className="text-warning ">{doctor}</h3>
        <h5>Price: ${fee}</h5>
        <p className="p-3">{what}</p>
        <Link to={`/appoint/${id}`}>
            <button className="btn btn-primary my-3">Appoinment for {name.toLowerCase()}</button>
        </Link>
        </Card>
    </div>
    );
};

export default Service;