import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { CATEGORIES_EP,CATEGORYDETAILS_EP } from "./endPoints";

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
export const getCategories = async (parentId) =>
  await apiCall({ url: CATEGORIES_EP(parentId) });

export const useCategories = (parentId) => {
return useQuery({
queryKey: ["categories", parentId],
queryFn: () => getCategories(parentId || ""),
});

};

//categoryDetails//

// const fetchCategoryDetails = async (adsCategoryId) => {
//   const response = await axios.get(
//     `https://client.mobile.chemanca.com/api/advertisements/AdsCategoryDetail/GetAllAdvertisementCategoryDetails?categoryId=${adsCategoryId}`
//   );
//   return response.data;
// };

export const getCategoryDetails = async (adsCategoryId) =>
  await apiCall({ url: CATEGORYDETAILS_EP(adsCategoryId) });

// export const useCategoryDetails = (adsCategoryId) => {
//   return useQuery({
//     queryKey: ["categoryDetails", adsCategoryId],
//     queryFn: () => getCategoryDetails(adsCategoryId),
//     enabled: !!adsCategoryId,
//   });
// };
