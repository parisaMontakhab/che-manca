import { useQuery } from "@tanstack/react-query";
import axios from "axios";

//categories//
const fetchCategories = async () => {
  const { data } = await axios.get(
    "https://client.mobile.chemanca.com/api/advertisements/AdsCategory/GetAllAdvertisementCategories"
  );

  return data;
};

export const useCategories = () => {
  return useQuery({
    queryKey: ["categories"],
    queryFn: fetchCategories,
  });
};

//subCategories//
const fetchSubCategories = async (parentId)=>{
    const {data} = await axios.get(`https://client.mobile.chemanca.com/api/advertisements/AdsCategory/GetAllAdvertisementCategories?parentId=${parentId}`);
    console.log(data)
    return data;
}
export const useSubCategories = (parentId) => {
    return useQuery({
      queryKey: ["subCategories",parentId],
      queryFn: ()=>fetchSubCategories(parentId),
      enabled: !!parentId,
    });
  };
  