import React from 'react'
import Category from "./componentes/Category"
import Header from "./componentes/Header"
import Banner from './componentes/Banner'
import Product from './componentes/Product'
import PromotionSection from './componentes/PromotionSection'
import CategoryCards from './componentes/CategoryCards'
import Newsletter from './componentes/Newsletter'
import Footer from './componentes/Footer'


const App = () =>{
  return (

    <div>
      <Header/>
      <Category/>

      <div>
        <Banner/>
      </div>

      <div>
        <Product/>
        <PromotionSection/>
        <CategoryCards/>
        <Newsletter/>
      </div>
      
      <div>
        <Footer/>
      </div>

    </div>
    
    

  )
}

export default App