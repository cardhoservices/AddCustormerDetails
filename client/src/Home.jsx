import React from 'react'
import { Link } from 'react-router-dom'
import css from './css/home.module.css'

function Home() {
  return (
    <>
      <div className={css.container}>

        <div className={css.mainbox}>

          <h1 id={css.homeH1}>CARDHO<br /><span id={css.titleSpan}>BACKEND PORTAL</span></h1>
          <p id={css.homeParas}>You can either ADD a customer or CHECK or UPDATE any detail of customer <br /> <br /> <span id={css.warningSpan}>BE CAREFULL WITH DATA</span></p>

          <div className={css.buttonDiv}>
            <Link to={"/AddCustomerDetails"}><button className={css.addbutton}>Add Customer</button></Link>
            <Link to={"/CustomerDetails"}><button className={css.detailsbutton}>Detail of Customers</button></Link>
          </div>

        </div>

      </div>
    </>
  )
}

export default Home