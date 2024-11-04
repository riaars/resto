import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import RecipeDetails from "./RecipeDetails";
import { HOME_PAGE, RECIPE_DETAILS_PAGE } from "./helpers/Route";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={HOME_PAGE} element={<HomePage />}></Route>
        <Route path={RECIPE_DETAILS_PAGE} element={<RecipeDetails />}></Route>
      </Routes>
    </div>
  );
}

export default App;
