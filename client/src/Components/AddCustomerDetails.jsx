import React, { useEffect, useState } from 'react';
import '../style.css';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';


function AddCustomerDetails() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate()
    const onSubmit = (data) => {
        // console.log(data)
        axios.post(`${import.meta.env.VITE_SERVER_URL}/post`, data)
            .then(res => {
                // console.log(res.data)
                navigate("/CustomerDetails")
            })
            .catch(err => console.log(err))
    }
    return (
        <div className="container">
            <h1>Add Customer Details</h1>
            <Link to="/"><button type="button">Home</button></Link>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="Name" {...register("Name", { required: { value: true, message: "Name is required" } })} />
                {errors.Name ? <p className='error'>{errors.Name.message}</p> : null}
                <label htmlFor="phone">Phone</label>
                <input type="text" id="phone" name="Phone" {...register("Phone", {
                    required: "Phone number is required",
                    minLength: {
                        value: 10,
                        message: "Phone number should be 10 digits"
                    },
                    maxLength: {
                        value: 10,
                        message: "Phone number should be 10 digits"
                    }
                })} />
                {errors.Phone ? <p className='error'>{errors.Phone.message}</p> : null}
                <label htmlFor="address">Address</label>
                <input type="text" id="address" name="Address" {...register("Address", { required: { value: true, message: "Address is required" } })} />
                {errors.Address ? <p className='error'>{errors.Address.message}</p> : null}
                <label htmlFor="car">Car Name</label>
                <input type="text" id="car" name="Car" placeholder='eg:- Amaze' {...register("Car", { required: { value: true, message: "Car Name is required" } })} />
                {errors.Car ? <p className='error'>{errors.Car.message}</p> : null}

                

                {errors.Package ? <p className='error'>{errors.Package.message}</p> : null}
                <label htmlFor="Date">Start Date</label>
                <input type="date" id="date" name="StartDate" {...register("StartDate", { required: { value: true, message: "Start Date is required" } })} />
                {errors.StartDate ? <p className='error'>{errors.StartDate.message}</p> : null}
                <label>Interrier Cleaning</label>
                <div className="interrior">
                    <div>
                        <label>1st</label>
                        <input type="date" id='interrior' name='interrior' {...register("interriorfirst")} />
                        {errors.interriorfirst ? <p className='error'>{errors.interriofirst.message}</p> : null}
                    </div>
                    <div>
                        <label>2nd</label>
                        <input type="date" id='interrior' name='interrior' {...register("interriorsecond")} />
                        {errors.interriorsecond ? <p className='error'>{errors.interriorsecond.message}</p> : null}
                    </div>
                    <div>
                        <label>3rd</label>
                        <input type="date" id='interrior' name='interrior' {...register("interriorthird")} />
                        {errors.interriorthird ? <p className='error'>{errors.interriorthird.message}</p> : null}
                    </div>
                    <div>
                        <label>4th</label>
                        <input type="date" id='interrior' name='interrior' {...register("interriorfourth")} />
                        {errors.interriorfourth ? <p className='error'>{errors.interriorfourth.message}</p> : null}
                    </div>
                </div>
                <button>Submit</button>
            </form>
        </div>
    );
}

export default AddCustomerDetails;
