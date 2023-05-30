import React from 'react'
import Category from "../componentes/Category"
import Header from "../componentes/Header"
import Footer from '../componentes/Footer'
import ViewProducts from '../componentes/ViewProducts'


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