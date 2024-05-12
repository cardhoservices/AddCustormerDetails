import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import css from '../css/getCustomerDetails.module.css'
import LoadingPage from './LoadingPage'

function GetCustomerDetails() {
    const [data, setData] = useState(null)
    const [search, setSearch] = useState("")

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_SERVER_URL}/get`)
            .then(res => {
                // console.log(res.data)
                setData(res.data)
            })
            .catch(err => console.log(err))
    }, [])

    const deleteData = async (id) => {
        await alert("Are you sure?")
        axios.delete(`${import.meta.env.VITE_SERVER_URL}/delete/${id}`)
            // .then(() =>
            //     window.location.reload()
            //     )
            .catch(err => console.log(err))
    }
    if (data === null) {
        <LoadingPage />
    }
    else {

        return (
            <div>
                <div className={css.heading}>
                    <input type="search" name="" className={css.searchbar} onChange={(e) => setSearch(e.target.value)} placeholder='Search By Phone Number' />

                    <div className={css.headerButtons}>
                        <Link to="/AddCustomerDetails"><button>Add Customer Details</button></Link>
                        <Link to="/"><button>Home</button></Link>
                    </div>
                </div>
                <div className={css._mainDivBox}>
                    {data.filter((item) => {
                        const phone = String(item.Phone);
                        return search === "" ? item : phone.toLowerCase().includes(search.toLowerCase());
                    }).map((item) => {
                        return (
                            <div key={item._id}>
                                <div className={css.card}>
                                    <p>Name: {item.Name}</p>
                                    <p>Phone: {item.Phone}</p>
                                    <p>Address: {item.Address}</p>
                                    <p>Car: {item.Car}</p>
                                    <p>Start Date: {item.StartDate ? item.StartDate.split("T")[0] : "N/A"}</p>
                                    <p>First interrier date: {item.interriorfirst ? item.interriorfirst.split("T")[0] : "N/A"}</p>
                                    <p>Second interrior date: {item.interriorsecond ? item.interriorsecond.split("T")[0] : "N/A"}</p>
                                    <p>Third interrior date: {item.interriorthird ? item.interriorthird.split("T")[0] : "N/A"}</p>
                                    <p>Fourth interrior date: {item.interriorfourth ? item.interriorfourth.split("T")[0] : "N/A"}</p>
                                    <div className='delUpdateButton'>
                                        <Link to={`/UpdateCustomerDetails/${item._id}`}><button type="button">Update</button></Link>
                                        <button type="button" onClick={() => deleteData(item._id)}>Delete</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default GetCustomerDetails