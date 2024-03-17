
import PropTypes from "prop-types";

const WantToCooks = ({ cook ,handleDelete,handleCurrentCook,newCook}) => {
  console.log(newCook);
  let totalCalories=0;
  let totalTime =0;
  return (
    <div>
     <h1 className="text-center">Want To Cook: {cook.length} </h1>
    <hr className="mx-20" />

      <table>
        <thead>
          <tr>
            <th></th>
            <th className="px-2">Name</th>
            <th className="px-2">Time</th>
            <th className="px-2">Calories</th>
            <th></th>
          </tr>
        </thead>
        <tbody >
          {cook.map((recipe, id) => (
            <tr className="bg-[#28282808] text-[#282828B2] text-xl" key={id}>
              <td className=''>{id + 1}</td>
              <td className='px-2'>{recipe.recipe_name}</td>
              <td className='px-2 text-center'>{recipe.preparing_time} minutes</td>
              <td className='px-2 text-center'>{recipe.calories}   Calories</td>
              <td className=''>
  <button 
    onClick={() => {
      handleDelete(recipe.recipe_id); 
      handleCurrentCook(recipe);
     
    }} 
    className="bg-green-500 mr-4 text-black rounded-lg border-none p-3"
  >
    Preparing
  </button>
</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-24">

     <h1 className="text-center">Currently Cooking: {newCook.length} </h1>
    <hr className="mx-20" />


          <table className="overflow-scroll">
            <thead>
              <tr>
                <th></th>
                <th className="px-6">Name</th>
                <th className="px-2">Time</th>
                <th className="px-6">Calories</th>
                <th></th>
              </tr>
            </thead>
            <tbody >
              {newCook.map((recipe2, id) => (
                <tr className="bg-[#28282808] text-[#282828B2] text-xl" key={id}>
                  <td className=''>{id + 1}</td>
                  <td className='px-6'>{recipe2.recipe_name}</td>
                  <td className='px-2 text-center'>{recipe2.preparing_time} minutes</td>
                  <td className='px-6 text-center'>{recipe2.calories} Calories</td>
                  <td className=''>
    </td>

    <div className="hidden">
        {totalCalories +=recipe2.calories}
        {totalTime +=recipe2.preparing_time}
       
    </div>
                </tr>
                
              ))}
            </tbody>
          </table>
          <div className="ml-32 lg:ml-40 text-[#282828B2] text-xl text-center gap-5 flex">
            <p className="pt-4 bg-slate-200 rounded-md p-2">Total Time: <br /> {totalTime} minutes </p>
            <p className="bg-slate-200 rounded-md p-2 pt-4">Total Calories: <br /> {totalCalories} Calories </p>
            
          </div>
      </div>
    </div>
  );
};

export default WantToCooks;

WantToCooks.propTypes={
    cook: PropTypes.object.isRequired,
    handleDelete: PropTypes.func.isRequired,
    handleCurrentCook: PropTypes.func.isRequired,
    newCook: PropTypes.object.isRequired
}