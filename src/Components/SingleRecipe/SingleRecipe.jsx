import { CiClock2 } from "react-icons/ci";
import { VscFlame } from "react-icons/vsc";
import PropTypes from "prop-types";

const SingleRecipe = ({ singleRecipe, handleWantToCook }) => {
  const {
    recipe_image,
    recipe_id,
    recipe_name,
    description,
    ingredients,
    preparing_time,
    calories,
  } = singleRecipe;
console.log(recipe_id)
  return (
    <div>
      {/* <h1>{recipe_id}</h1> */}
      <div className="card  bg-base-100 shadow-xl">
        <img className="h-52 p-5 rounded-3xl" src={recipe_image} alt="" />

        <div className="card-body  h-[555px] ">
          <div>
            <h1 className="text-xl">{recipe_name}</h1>
            <p className="text-[#878787]">{description.slice(0, 100)}</p>
          </div>
          <div>
            <hr className="opacity-50" />
          </div>
          <p className="text-lg p-0 text-[#282828]">Ingredients: {ingredients.length}</p>
          {ingredients.map((ingredient, id) => (
            <div className="text-lg text-[#878787] " key={id}>
              <li className="list-disc">{ingredient}</li>
            </div>
          ))}

          <div className="flex text-[#282828CC]  space-x-5 items-center">
            <div className="flex gap-1 items-center justify-center">
              <CiClock2 />
              <p>{preparing_time} minutes</p>
            </div>
            <div className="flex gap-1 justify-center items-center">
              <VscFlame />
              <p>{calories} calories </p>
            </div>
          </div>
          <div className="card-actionsmb-5">
            <button onClick={()=>handleWantToCook(singleRecipe)}  className="btn border-none px-10  bg-green-500 rounded-full  ">
              Want to Cook
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

SingleRecipe.propTypes = {
  singleRecipe: PropTypes.object.isRequired,
  handleWantToCook: PropTypes.func.isRequired
};

export default SingleRecipe;
