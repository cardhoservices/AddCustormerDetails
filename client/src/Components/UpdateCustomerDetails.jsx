import React, { useEffect, useState } from 'react';
import '../style.css';
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';

function UpdateCustomerDetails() {
    const [Name, setName] = useState("")
    const [Phone, setPhone] = useState("")
    const [Address, setAddress] = useState("")
    const [Package, setPackage] = useState("")
    const [interrierfirst, setinterrierfirst] = useState("")
    const [interriersecond, setinterriersecond] = useState("")
    const [interrierthird, setinterrierthird] = useState("")
    const [interrierfourth, setinterrierfourth] = useState("")
    const [StartDate, setDate] = useState([])
    const navigate = useNavigate()
    const id = useParams().id

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_SERVER_URL}/getdatabyid/${id}`)
            .then(res => {
                setName(res.data.Name)
                setPhone(res.data.Phone)
                setAddress(res.data.Address)
                setPackage(res.data.Package)
                setinterrierfirst(res.data.interrierfirst)
                setinterriersecond(res.data.interriersecond)
                setinterrierthird(res.data.interrierthird)
                setinterrierfourth(res.data.interrierfourth)
                setDate(res.data.StartDate.split("T")[0])
            })
            .catch(err => console.log(err))
    }, [])

    const onSubmit = (data) => {
        // console.log(data)
        axios.put(`${import.meta.env.VITE_SERVER_URL}/update/${id}`, { Name, Phone, Address, Package, StartDate,interrierfirst,interriersecond,interrierthird,interrierfourth })
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
                <input type="text" id="name" name="Name" defaultValue={Name} onChange={(e) => setName(e.target.value)} />
                <label htmlFor="phone">Phone</label>
                <input type="text" id="phone" name="Phone" defaultValue={Phone} onChange={(e) => setPhone(e.target.value)} />
                <label htmlFor="address">Address</label>
                <input type="text" id="address" name="Address" defaultValue={Address} onChange={(e) => setAddress(e.target.value)} />
                <label htmlFor="package">Package</label>
                <select name="Package" id="" value={Package} onChange={(e) => setPackage(e.target.value)}>
                    <option value="650 (Hatchback)" >650 (Hatchback)</option>
                    <option value="700 (Sedan)">700 (Sedan)</option>
                    <option value="750 (SUV)">750 (SUV)</option>
                    <option value="850 (luxury)">850 (luxury)</option>
                </select>
                <label htmlFor="Date">Start Date</label>
                <input type="date" id="Date" name="Date" defaultValue={StartDate} onChange={(e) => setDate(e.target.value)} />
                <div>
                    <div>
                        <label>Interrie First</label>
                        <input type="date" id="Date" name="Date" defaultValue={interrierfirst} onChange={(e) => setinterrierfirst(e.target.value)} />
                    </div>
                    <div>
                        <label>Interrie Second</label>
                        <input type="date" id="Date" name="Date" defaultValue={interriersecond} onChange={(e) => setinterriersecond(e.target.value)} />
                    </div>
                    <div>
                        <label>Interrie Third</label>
                        <input type="date" id="Date" name="Date" defaultValue={interrierthird} onChange={(e) => setinterrierthird(e.target.value)} />
                    </div>
                    <div>
                        <label>Interrie Fourth</label>
                        <input type="date" id="Date" name="Date" defaultValue={interrierfourth} onChange={(e) => setinterrierfourth(e.target.value)} />
                    </div>
                </div>
                <button type='button' onClick={() => navigate(-1)}>Back</button>
                <button type='submit' onClick={() => onSubmit()}>Submit</button>
            </div>
        </div>
    );
}

export default UpdateCustomerDetails;
