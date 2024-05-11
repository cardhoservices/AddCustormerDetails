import React, { useEffect, useState } from 'react';
import '../style.css';
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';

function UpdateCustomerDetails() {
    const [Name, setName] = useState("")
    const [Phone, setPhone] = useState("")
    const [Address, setAddress] = useState("")
    const [Package, setPackage] = useState("")
    const [interriorfirst, setinterrierfirst] = useState("")
    const [interriorsecond, setinterriersecond] = useState("")
    const [interriorthird, setinterrierthird] = useState("")
    const [interriorfourth, setinterrierfourth] = useState("")
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
                setinterrierfirst(res.data.interriorfirst.split("T")[0])
                setinterriersecond(res.data.interriorsecond.split("T")[0])
                setinterrierthird(res.data.interriorthird.split("T")[0])
                setinterrierfourth(res.data.interriorfourth.split("T")[0])
                setDate(res.data.StartDate.split("T")[0])
                // console.log(res.data)
            })
            .catch(err => console.log(err))
    }, [])

    const onSubmit = (data) => {
        axios.put(`${import.meta.env.VITE_SERVER_URL}/update/${id}`, { Name, Phone, Address, Package, StartDate,interriorfirst,interriorsecond,interriorthird,interriorfourth })
            .then(res => {
                console.log(res.data)
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
                        <label>Interrier First</label>
                        <input type="date" id="Date" name="interrierfirst" defaultValue={interriorfirst} onChange={(e) => setinterrierfirst(e.target.value)} />
                    </div>
                    <div>
                        <label>Interrier Second</label>
                        <input type="date" id="Date" name="interriersecond" defaultValue={interriorsecond} onChange={(e) => setinterriersecond(e.target.value)} />
                    </div>
                    <div>
                        <label>Interrier Third</label>
                        <input type="date" id="Date" name="interrierthird" defaultValue={interriorthird} onChange={(e) => setinterrierthird(e.target.value)} />
                    </div>
                    <div>
                        <label>Interrier Fourth</label>
                        <input type="date" id="Date" name="interrierfourth" defaultValue={interriorfourth} onChange={(e) => setinterrierfourth(e.target.value)} />
                    </div>
                </div>
                <button type='button' onClick={() => navigate(-1)}>Back</button>
                <button type='submit' onClick={() => onSubmit()}>Submit</button>
            </div>
        </div>
    );
}

export default UpdateCustomerDetails;
