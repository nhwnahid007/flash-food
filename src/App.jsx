
import { useState } from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'
import Navbar from './Components/Navbar/Navbar'
import Recipes from './Components/Recipes/Recipes'
import WantToCooks from './Components/WantToCooks/WantToCooks'
import OurRecipes from './OurRecipes/OurRecipes'
import { ToastContainer,toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Footer from './Components/Footer/Footer'

function App() {
  const [cook,setCook] =useState([]);
  const [newCook,setNewCook]=useState([]);

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

  const handleDelete = (id) =>{
    const newCook=cook.filter(item => item.recipe_id !==id)
    setCook(newCook)
    handleCurrentCook(newCook)
  }

  const handleCurrentCook=(currentCook)=>{
    console.log(currentCook)
    setNewCook([...newCook,currentCook])
  }
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
          handleDelete={handleDelete}
          handleCurrentCook={handleCurrentCook}
          newCook={newCook}
        ></WantToCooks></div>
      </div>
      <Footer></Footer>
      </div>
    </>
  )
}

export default App
