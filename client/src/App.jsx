import React from 'react'
import { Routes, Route } from 'react-router-dom'
import AddCustomerDetails from './Components/AddCustomerDetails'
import CustomerDetails from './Components/CustomerDetails'
import Home from './Home'
import UpadteCustomerDetails from './Components/UpdateCustomerDetails'

function App() {
    return (
        <>
            <Routes>
                <Route path="/AddCustomerDetails" element={<AddCustomerDetails />} />
                <Route path="/CustomerDetails" element={< CustomerDetails />} />
                <Route path="/UpdateCustomerDetails/:id" element={< UpadteCustomerDetails />} />
                <Route path="/" element={< Home />} />
            </Routes>
        </>
    )
}

export default App