import React, { useEffect, useState } from 'react';
import '../style.css';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';

function AddCustomerDetails() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate()
    const onSubmit = (data) => {
        console.log(data)
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
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="Email" {...register("Email", { required: { value: true, message: "Email is required" } })} />
                {/* {errors.Email ? <p className='error'>{errors.Email.message}</p> : null} */}
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
                <label htmlFor="car">Car</label>
                <input type="text" id="car" name="Car" {...register("Car", { required: { value: true, message: "Car is required" } })} />
                {errors.Car ? <p className='error'>{errors.Car.message}</p> : null}
                <label htmlFor="package">Package</label>
                <select name="Package" id="Package" {...register("Package", {required: "Package is required"})}>
                    <option value="">Select a package</option>
                    <option value="650 (Hatchback)">650 (Hatchback)</option>
                    <option value="700 (Sedan)">700 (Sedan)</option>
                    <option value="750 (SUV)">750 (SUV)</option>
                    <option value="850 (luxury)">850 (luxury)</option>
                </select>

                {errors.Package ? <p className='error'>{errors.Package.message}</p> : null}
                <label htmlFor="Date">Start Date</label>
                <input type="date" id="date" name="StartDate" {...register("StartDate", { required: { value: true, message: "Start Date is required" } })} />
                {errors.StartDate ? <p className='error'>{errors.StartDate.message}</p> : null}
                <button>Submit</button>
            </form>
        </div>
    );
}

export default AddCustomerDetails;
