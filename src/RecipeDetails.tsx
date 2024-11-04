import { HOME_PAGE } from "./helpers/Route";
import { useMealDetails } from "./hooks/useMealsDetail";
import { RecipeProps } from "./props/RecipeProps";
import { Link, useParams } from "react-router-dom";

interface detailProps {
  detail?: RecipeProps;
}

function RecipeDetails() {
  const { id } = useParams();
  const { detail }: detailProps = useMealDetails(id ? id : "53065");

  return (
    <div>
      <Link to={HOME_PAGE}>
        <button className="btn btn-primary">Back</button>
      </Link>
      <div className="recipe-title"> {detail?.strMeal}</div>
      <div className="recipe-area"> {detail?.strArea}</div>
      <div className="recipe-category"> {detail?.strCategory}</div>
      <div className="flex-wrap">
        <div className="padding-sm">
          <img className="recipe-thumb-large" src={detail?.strMealThumb} />
        </div>
        <div className="instructions">
          <div>
            <strong>Instructions:</strong>
          </div>
          <div> {detail?.strInstructions}</div>
        </div>
      </div>
    </div>
  );
}

export default RecipeDetails;
