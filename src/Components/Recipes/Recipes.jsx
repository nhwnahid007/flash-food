import { useEffect, useState } from "react";
import SingleRecipe from "../SingleRecipe/SingleRecipe";
import PropTypes from "prop-types";

const Recipes = ({handleWantToCook}) => {
    const [recipes,setRecipes] =useState([]);
    useEffect(()=>{
        fetch('./Recipe.json')
        .then(res => res.json())
        .then(data => setRecipes(data))
    },[])
    console.log(recipes)
    return (
       <div className="grid lg:grid-cols-2 gap-5">
        {
            recipes.map((singleRecipe,id) => <SingleRecipe
             key={id} 
             singleRecipe={singleRecipe}
             handleWantToCook={handleWantToCook}
             
             ></SingleRecipe>)
        }
       </div>
    );
};
Recipes.propTypes = {
    handleWantToCook: PropTypes.func.isRequired
};
export default Recipes;