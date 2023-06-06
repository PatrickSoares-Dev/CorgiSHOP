import React from 'react'
import Category from "../componentes/Category/Category"
import CheckoutForm from "../componentes/Checkout/CheckoutForm"
import Header from "../componentes/Header/Header"
import Footer from '../componentes/Footer/Footer'

const Checkout = () =>{
  return (

    <div>
      <Header/>
      <Category/>      
      
      <div>
        <CheckoutForm/>

      </div>

      <div>
        <Footer/>
      </div>

    </div>
    

  )
}

export default Checkout;