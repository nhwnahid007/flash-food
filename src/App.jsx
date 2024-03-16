
import './App.css'
import Banner from './Components/Banner/Banner'
import Navbar from './Components/Navbar/Navbar'
import Recipes from './Components/Recipes/Recipes'
import WantToCooks from './Components/WantToCooks/WantToCooks'
import OurRecipes from './OurRecipes/OurRecipes'

function App() {

  const handleWantToCook =(singleRecipe)=>{
    console.log('clicked',singleRecipe)
  }
  return (
    <>
     <div className='container max-w-screen-lg mx-auto'>
      <Navbar></Navbar>
      <Banner></Banner>
      <OurRecipes></OurRecipes>
      <div className='lg:flex gap-1'>
        <div className='lg:w-[60%]'><Recipes handleWantToCook={handleWantToCook}></Recipes></div>
        <div className='lg:w-[40%]'><WantToCooks></WantToCooks></div>
      </div>
      </div>
    </>
  )
}

export default App
