import { act, useEffect, useState } from "react";
import "./App.css";
import { API } from "./helpers/API";
import RecipeCard from "./RecipeCard";
import { RecipeProps } from "./props/RecipeProps";
import Dropdown from "./components/Dropdown";

function HomePage() {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [activeOption, setActiveOption] = useState("");
  const [recipeList, setRecipeList] = useState<RecipeProps[]>([]);
  const [filteredData, setFilteredData] = useState<RecipeProps[]>([]);

  async function searchMenuByMeal(meal: string) {
    const url = API + `search.php?s=${meal}`;
    setLoading(true);
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response Status, ${response.status}`);
      }
      const json = await response.json();
      setRecipeList(json.meals);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  async function filterMenu(query: string, category: string) {
    console.log(query);
    const url = API + `filter.php?${category.charAt(0).toLowerCase()}=${query}`;
    console.log(url);
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response Status: ${response.status}`);
      }
      const json = await response.json();
      console.log(json.meals);
      setFilteredData(json.meals);
      // setRecipeList(json.meals);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    searchMenuByMeal(search);
    filterMenu(activeOption, "Area");
  }, []);

  const categoryList = recipeList?.map((item) => item.strCategory);
  const uniqueCategoryList = categoryList.filter(
    (item, index) => categoryList.indexOf(item) === index
  );
  const areaList = recipeList?.map((item) => item.strArea);
  const uniqueAreaList = areaList.filter(
    (item, index) => areaList.indexOf(item) === index
  );

  const handleChange = (item: string, category: string) => {
    setActiveOption(item);
    filterMenu(item, category);
  };

  // console.log(filteredData);
  // let data = activeOption ? filteredData : recipeList;
  // console.log(data);
  // console.log(activeOption);

  return (
    <div>
      <div>
        <h1>Find cooking inspiration</h1>
        <div className="search-menu">
          <input
            className="input-search"
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search your recipe..."
          />
          <button
            className="btn btn-primary"
            onClick={() => searchMenuByMeal(search)}
          >
            Seach Menu
          </button>
        </div>

        {/* <Dropdown
        title="Area"
        content={uniqueAreaList}
        onClick={handleChange}
        selectedOption={activeOption}
      /> */}
        {/* <Dropdown
        title="Category"
        content={uniqueCategoryList}
        onClick={handleChange}
        selectedOption={activeOption}
      /> */}

        {loading ? (
          <div>Loading...</div>
        ) : (
          <div className="card-grid-flex">
            {recipeList?.map((recipe: RecipeProps) => (
              <RecipeCard key={recipe.idMeal} recipe={recipe} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default HomePage;
