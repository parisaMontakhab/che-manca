import { useQuery } from "@tanstack/react-query";
import axios from "axios";

//categories//
const fetchCategories = async (parentId) => {
  const url = `https://client.mobile.chemanca.com/api/advertisements/AdsCategory/GetAllAdvertisementCategories?parentId=${
    parentId || ""
  }`;
  const response = await axios.get(url);
 // console.log(response.data)
  return response.data;
};

export const useCategories = (parentId) => {
  return useQuery({
    queryKey: ["categories", parentId],
    queryFn: () => fetchCategories(parentId),
  });
};

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
