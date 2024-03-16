
import './App.css'
import Banner from './Components/Banner/Banner'
import Navbar from './Components/Navbar/Navbar'
import Recipes from './Components/Recipes/Recipes'
import OurRecipes from './OurRecipes/OurRecipes'

function App() {


  return (
    <>
     <div className='container max-w-screen-lg mx-auto'>
      <Navbar></Navbar>
      <Banner></Banner>
      <OurRecipes></OurRecipes>
      <Recipes></Recipes>
      </div>
    </>
  )
}

export default App
