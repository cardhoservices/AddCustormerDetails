import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import '../style.css'

function GetCustomerDetails() {
    const [data, setData] = useState([])
    const [search, setSearch] = useState("")

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_SERVER_URL}/get`)
            .then(res => {
                // console.log(res.data)
                setData(res.data)
            })
            .catch(err => console.log(err))
    }, [data])

    const deleteData = async (id) => {
        await alert("Are you sure?")
        axios.delete(`${import.meta.env.VITE_SERVER_URL}/delete/${id}`)
            // .then(() =>
            //     window.location.reload()
            //     )
            .catch(err => console.log(err))
    }

    return (
        <div>
            <div className='heading'>
                <input type="search" name="" className='searchbar' onChange={(e) => setSearch(e.target.value)} placeholder='Search By Phone Number' />
                <div>
                    <Link to="/AddCustomerDetails"><button>Add Customer Details</button></Link>
                    <Link to="/"><button>Home</button></Link>
                </div>
            </div>
            <div>
                {data.filter((item) => {
                    const phone = String(item.Phone);
                    return search === "" ? item : phone.toLowerCase().includes(search.toLowerCase());
                }).map((item) => {
                    return (
                        <div key={item._id}>
                            <div className='card'>
                                <p>Name: {item.Name}</p>
                                <p>Email: {item.Email}</p>
                                <p>Phone: {item.Phone}</p>
                                <p>Address: {item.Address}</p>
                                <p>Car: {item.Car}</p>
                                <p>Package: {item.Package}</p>
                                <p>Start Date: {item.StartDate ? item.StartDate.split("T")[0] : "N/A"}</p>
                                <div>
                                    <button type="button" onClick={() => deleteData(item._id)}>Delete</button>
                                    <Link to={`/UpdateCustomerDetails/${item._id}`}><button type="button">Update</button></Link>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default GetCustomerDetails