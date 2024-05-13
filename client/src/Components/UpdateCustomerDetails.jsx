import React, { useEffect, useState } from 'react';
import '../style.css';
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';
import css from '../css/updateCustomerDetails.module.css'

function UpdateCustomerDetails() {
    const [Name, setName] = useState("")
    const [Phone, setPhone] = useState("")
    const [Address, setAddress] = useState("")
    const [Car, setCar] = useState("")
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
                setCar(res.data.Car)
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
        axios.put(`${import.meta.env.VITE_SERVER_URL}/update/${id}`, { Name, Phone, Address, Car, StartDate, interriorfirst, interriorsecond, interriorthird, interriorfourth })
            .then(res => {
                console.log(res.data)
                navigate("/CustomerDetails")
            })
            .catch(err => console.log(err))
    }
    return (
        <div className="container">
            <h1>Update Customer Details</h1>

            <div>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="Name" defaultValue={Name} onChange={(e) => setName(e.target.value)} />
                <label htmlFor="phone">Phone</label>
                <input type="text" id="phone" name="Phone" defaultValue={Phone} onChange={(e) => setPhone(e.target.value)} />
                <label htmlFor="address">Address</label>
                <input type="text" id="address" name="Address" defaultValue={Address} onChange={(e) => setAddress(e.target.value)} />
                <label htmlFor="car">Car Name</label>
                <input type="text" id="car" name="Car" defaultValue={Car} onChange={(e) => setCar(e.target.value)} />
                <label htmlFor="Date">Start Date</label>
                <input type="date" id="Date" name="Date" defaultValue={StartDate} onChange={(e) => setDate(e.target.value)} />
                <div className={css.interiorContainer}>
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
                <div className="updateCustomerPageButtons">
                    <Link to="/"><button type="button">Home</button></Link>
                    <button type='submit' onClick={() => onSubmit()}>Submit</button>
                    <button type='button' onClick={() => navigate(-1)}>Back</button>
                </div>
            </div>
        </div>
    );
}

export default UpdateCustomerDetails;
