import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { CATEGORIES_EP } from "./endPoints";

const baseURL = import.meta.env.VITE_CHEMANCHA_BASE_URL;

async function apiCall({ url, options = { method: "get" } }) {
  try {
    const response = await axios[options.method](`${baseURL}${url}`);
    return response.data;
  } catch (error) {
    console.error("Error occurred during API call:", error.message);
   
    throw error;
  }
}

  //export apiCall function to another file
  //add try catch logic for error handling
  //you can have global state with context or redux for handling ui errors

//categories//
export const fetchCategories = async (parentId) =>
  await apiCall({ url: CATEGORIES_EP(parentId) });
// export const useCategories = (parentId) => {
// return useQuery({
// queryKey: ["categories", parentId],
// queryFn: () => fetchCategories(parentId),
// });
//there is no need to implement new custom hook for api call and you can use useQuery by itself
// };

//categoryDetails//

const fetchCategoryDetails = async (adsCategoryId) => {
  const response = await axios.get(
    `https://client.mobile.chemanca.com/api/advertisements/AdsCategoryDetail/GetAllAdvertisementCategoryDetails?categoryId=${adsCategoryId}`
  );
  return response.data;
};

export const useCategoryDetails = (adsCategoryId) => {
  return useQuery({
    queryKey: ["categoryDetails", adsCategoryId],
    queryFn: () => fetchCategoryDetails(adsCategoryId),
    enabled: !!adsCategoryId,
  });
};
