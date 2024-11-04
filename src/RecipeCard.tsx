import { RecipeProps } from "./props/RecipeProps";
import { Link } from "react-router-dom";

interface RecipeCardProps {
  recipe: RecipeProps;
}

function RecipeCard({ recipe }: RecipeCardProps) {
  console.log(recipe);
  return (
    <Link to={`/details/${recipe.idMeal}`} style={{ textDecoration: "none" }}>
      <div className="recipe-card">
        <div className="recipe-title"> {recipe.strMeal}</div>
        <div className="recipe-area"> {recipe.strArea}</div>
        <img
          className="recipe-thumb"
          src={recipe.strMealThumb}
          alt={recipe.strMeal}
        />
      </div>
    </Link>
  );
}

export default RecipeCard;
