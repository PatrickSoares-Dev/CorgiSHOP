import React from 'react'
import Category from "../componentes/Category/Category"
import Header from "../componentes/Header/Header"
import Footer from '../componentes/Footer/Footer'
import ViewProducts from '../componentes/Product/ViewProducts'


const ProductPages = () =>{
  return (

    <div>
      <Header/>
      <Category/>      
      
      <ViewProducts/>

      <div>
        <Footer/>
      </div>

    </div>
    
    

  )
}

export default ProductPages