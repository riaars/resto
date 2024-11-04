import { useEffect, useState } from "react";
import { API } from "../helpers/API";
import { RecipeProps } from "../props/RecipeProps";

export function useMealDetails(id: string) {
  const [detail, setDetail] = useState<RecipeProps>();
  async function fetchMealsDetails(id: string) {
    const url = API + `lookup.php?i=${id}`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response Error: ${response.status}`);
      }
      const json = await response.json();
      setDetail(json.meals[0]);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchMealsDetails(id);
  }, []);

  return {
    detail,
  };
}
