
import { useState } from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'
import Navbar from './Components/Navbar/Navbar'
import Recipes from './Components/Recipes/Recipes'
import WantToCooks from './Components/WantToCooks/WantToCooks'
import OurRecipes from './OurRecipes/OurRecipes'

function App() {
  const [cook,setCook] =useState([])

  const handleWantToCook =(singleRecipe)=>{
   setCook([...cook,singleRecipe])
    
    
  }
  console.log(cook)
 
  return (
    <>
     <div className='container  mx-auto'>
      <Navbar></Navbar>
      <Banner></Banner>
      <OurRecipes></OurRecipes>
      <div className='lg:flex gap-1'>
        <div className='lg:w-[60%]'><Recipes handleWantToCook={handleWantToCook}></Recipes></div>
        <div className='lg:w-[40%]'>
          <WantToCooks
          cook={cook}
        ></WantToCooks></div>
      </div>
      </div>
    </>
  )
}

export default App
