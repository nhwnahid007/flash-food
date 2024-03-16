import { useEffect, useState } from "react";
import SingleRecipe from "../SingleRecipe/SingleRecipe";

const Recipes = () => {
    const [recipes,setRecipes] =useState([]);
    useEffect(()=>{
        fetch('./Recipe.json')
        .then(res => res.json())
        .then(data => setRecipes(data))
    },[])
    console.log(recipes)
    return (
       <div className="">
        {
            recipes.map((singleRecipe,id) => <SingleRecipe
             key={id} 
             singleRecipe={singleRecipe}
             
             ></SingleRecipe>)
        }
       </div>
    );
};

export default Recipes;