
import PropTypes from "prop-types";

const WantToCooks = ({ cook }) => {
  console.log(cook);
  
  return (
    <div>
     
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
              <td className=''><button className="bg-green-500 mr-4 text-black rounded-lg border-none p-3">Preparing</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WantToCooks;

WantToCooks.propTypes={
    cook: PropTypes.object.isRequired
}