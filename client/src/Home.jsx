import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
    <Link to={"/AddCustomerDetails"}><button>Add customer</button></Link>
    <Link to={"/CustomerDetails"}><button>Details of customer</button></Link>
    </>
  )
}

export default Home