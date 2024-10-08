import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import css from '../css/getCustomerDetails.module.css'
// import LoadingPage from './LoadingPage'
import ClipLoader from "react-spinners/ClipLoader";

function GetCustomerDetails() {
    const [data, setData] = useState(null)
    const [loading, setloading] = useState(false)
    const [search, setSearch] = useState("")

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_SERVER_URL}/get`)
            .then(res => {
                // console.log(res.data)
                setData(res.data)
                setloading(true)
            })
            .catch(err => console.log(err))
    }, [])

    const deleteData = async (id) => {
        if (confirm("Are you sure?") == true) {
            axios.delete(`${import.meta.env.VITE_SERVER_URL}/delete/${id}`)
                .then(() =>
                    window.location.reload()
                )
                .catch(err => console.log(err))
        }
    }
    return (
        <>
            {
                loading ?
                    <div>
                        <div className={css.heading}>
                            <input type="search" name="" className={css.searchbar} onChange={(e) => setSearch(e.target.value)} placeholder='Search By Phone Number' />

                            <div className={css.headerButtons}>
                                <Link to="/AddCustomerDetails"><button className={css.addCustomerDetailButton}>Add Customer</button></Link>
                                <Link to="/"><button className={css.goToHomeButton}>Home</button></Link>
                            </div>
                        </div>
                        <div className={css._mainDivBox}>
                            {data.filter((item) => {
                                const phone = String(item.Phone);
                                return search === "" ? item : phone.toLowerCase().includes(search.toLowerCase());
                            }).map((item) => {
                                // console.log(item)
                                return (
                                    <div key={item._id}>
                                        <div className={css.card}>
                                            <p>Name: {item.Name}</p>
                                            <p>Phone: {item.Phone}</p>
                                            <p>Address: {item.Address}</p>
                                            <p>Car: {item.Car}</p>
                                            <p>Start Date: {item.StartDate ? item.StartDate.split("T")[0] : "N/A"}</p>
                                            <p>1<sup>st</sup> interior: {item.interriorfirst ? item.interriorfirst.split("T")[0] : "N/A"}</p>
                                            <p>2<sup>nd</sup> interior: {item.interriorsecond ? item.interriorsecond.split("T")[0] : "N/A"}</p>
                                            <p>3<sup>rd</sup> interior: {item.interriorthird ? item.interriorthird.split("T")[0] : "N/A"}</p>
                                            <p>4<sup>th</sup> interior: {item.interriorfourth ? item.interriorfourth.split("T")[0] : "N/A"}</p>
                                            <div className={css.delUpdateButton}>
                                                <Link to={`/UpdateCustomerDetails/${item._id}`}><button type="button">Update</button></Link>
                                                <button type="button" onClick={() => deleteData(item._id)}>Delete</button>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    :
                    <div className={css.loading}>
                        <ClipLoader
                            size={150}
                            aria-label="Loading Spinner"
                            data-testid="loader"
                        />
                    </div>
            }
        </>
    )
}

export default GetCustomerDetails