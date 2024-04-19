import React, { useEffect, useState } from 'react';
import '../style.css';
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';

function UpdateCustomerDetails() {
    const [Name, setName] = useState("")
    const [Email, setEmail] = useState("")
    const [Phone, setPhone] = useState("")
    const [Address, setAddress] = useState("")
    const [Car, setCar] = useState("")
    const [Package, setPackage] = useState("")
    const [StartDate, setDate] = useState([])
    const navigate=useNavigate()
    const id=useParams().id

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_SERVER_URL}/getdatabyid/${id}`)
            .then(res => {
                setName(res.data.Name)
                setEmail(res.data.Email)
                setPhone(res.data.Phone)
                setAddress(res.data.Address)
                setCar(res.data.Car)
                setPackage(res.data.Package)
                setDate(res.data.StartDate.split("T")[0])
            })
            .catch(err => console.log(err))
    },[])

    const onSubmit = (data) => {
        // console.log(data)
        axios.put(`${import.meta.env.VITE_SERVER_URL}/update/${id}`, {Name, Email, Phone, Address, Car, Package, StartDate})
            .then(res => {
                // console.log(res.data)
                navigate("/CustomerDetails")
            })
            .catch(err => console.log(err))
    }
    return (
        <div className="container">
            <h1>Update Customer Details</h1>
            <Link to="/"><button type="button">Home</button></Link>
            <div>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="Name" defaultValue={Name} onChange={(e) => setName(e.target.value)}/>
                <label htmlFor="email">Email</label>
                <input type="text" id="email" name="Email" defaultValue={Email} onChange={(e) => setEmail(e.target.value)}/>
                <label htmlFor="phone">Phone</label>
                <input type="text" id="phone" name="Phone" defaultValue={Phone} onChange={(e) => setPhone(e.target.value)}/>
                <label htmlFor="address">Address</label>
                <input type="text" id="address" name="Address" defaultValue={Address} onChange={(e) => setAddress(e.target.value)}/>
                <label htmlFor="car">Car</label>
                <input type="text" id="car" name="Car" defaultValue={Car} onChange={(e) => setCar(e.target.value)}/>
                <label htmlFor="package">Package</label>
                <select name="Package" id="" value={Package} onChange={(e) => setPackage(e.target.value)}>
                    <option value="650 (Hatchback)" >650 (Hatchback)</option>
                    <option value="700 (Sedan)">700 (Sedan)</option>
                    <option value="750 (SUV)">750 (SUV)</option>
                    <option value="850 (luxury)">850 (luxury)</option>
                </select>
                <label htmlFor="Date">Start Date</label>
                <input type="date" id="Date" name="Date" defaultValue={StartDate} onChange={(e) => setDate(e.target.value)}/>
                <button type='button' onClick={() => navigate(-1)}>Back</button>
                <button type='submit' onClick={() => onSubmit()}>Submit</button>
            </div>
        </div>
    );
}

export default UpdateCustomerDetails;
