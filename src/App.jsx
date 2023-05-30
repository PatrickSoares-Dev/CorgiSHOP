import React from 'react'
import Category from "./componentes/Category/Category"
import Header from "./componentes/Header/Header"
import Banner from './componentes/Banner/Banner'
import Product from './componentes/Product/Product'
import PromotionSection from './componentes/Promotion/PromotionSection'
import CategoryCards from './componentes/Category/CategoryCards'
import Newsletter from './componentes/Newsletter/Newsletter'
import Footer from './componentes/Footer/Footer'


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