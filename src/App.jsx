
import { useState } from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'
import Navbar from './Components/Navbar/Navbar'
import Recipes from './Components/Recipes/Recipes'
import WantToCooks from './Components/WantToCooks/WantToCooks'
import OurRecipes from './OurRecipes/OurRecipes'
import { ToastContainer,toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [cook,setCook] =useState([])

  const handleWantToCook =(singleRecipe)=>{
    console.log(singleRecipe)
  //  setCook([...cook,singleRecipe])
    const isExist= cook.find((pd) => pd.recipe_id == singleRecipe.recipe_id)
    if(!isExist){
      setCook([...cook,singleRecipe])
    }
    else{
      toast("You can't select same Item")
    }
  }

  
  console.log(cook)
 
  return (
    <>
     <div className='container  mx-auto'>
      <ToastContainer></ToastContainer>
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
