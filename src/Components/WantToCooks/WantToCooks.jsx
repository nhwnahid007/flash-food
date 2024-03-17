
import PropTypes from "prop-types";

const WantToCooks = ({ cook ,handleDelete,handleCurrentCook,newCook}) => {
  console.log(newCook);
  
  return (
    <div>
     <h1 className="text-center">Want To Cook: {cook.length} </h1>
    <hr className="mx-20" />

      <table>
        <thead>
          <tr>
            <th></th>
            <th className="px-6">Name</th>
            <th className="px-2">Time</th>
            <th className="px-6">Calories</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {cook.map((recipe, id) => (
            <tr key={id}>
              <td className=''>{id + 1}</td>
              <td className='px-6'>{recipe.recipe_name}</td>
              <td className='px-2'>{recipe.preparing_time}</td>
              <td className='px-6'>{recipe.calories}</td>
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

          <table>
            <thead>
              <tr>
                <th></th>
                <th className="px-6">Name</th>
                <th className="px-2">Time</th>
                <th className="px-6">Calories</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {newCook.map((recipe2, id) => (
                <tr key={id}>
                  <td className=''>{id + 1}</td>
                  <td className='px-6'>{recipe2.recipe_name}</td>
                  <td className='px-2'>{recipe2.preparing_time}</td>
                  <td className='px-6'>{recipe2.calories}</td>
                  <td className=''>
    </td>
   
                </tr>
                
              ))}
            </tbody>
          </table>
          <div className="add">
            <p>Hi: </p>
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