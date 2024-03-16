
import PropTypes from 'prop-types'

const SingleRecipe = ({singleRecipe}) => {
    const {recipe_image,recipe_id} =singleRecipe
  return (
    <div>
      <h1>{recipe_id}</h1>
      <img src={recipe_image} alt="" />
    </div>
  )
}

SingleRecipe.propTypes = {

}

export default SingleRecipe
