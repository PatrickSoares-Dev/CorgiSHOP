import React from 'react'
import Category from "../componentes/Category/Category"
import Header from "../componentes/Header/Header"
import Footer from '../componentes/Footer/Footer'
import OrderDetails from '../componentes/OrderDetails/OrderDetails'

const OrderConfirmation = () =>{
  return (

    <div>
      <Header/>
      <Category/>   

      <div>
      <OrderDetails/>

      </div>

      <div>
        <Footer/>
      </div>

    </div>
    

  )
}

export default OrderConfirmation;