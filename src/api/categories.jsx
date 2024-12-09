import { useQuery } from "@tanstack/react-query";
import axios from "axios";

//categories//
const fetchCategories = async (parentId) => {
  const url = `https://client.mobile.chemanca.com/api/advertisements/AdsCategory/GetAllAdvertisementCategories?parentId=${
    parentId || ""
  }`;
  const response = await axios.get(url);
  return response.data;
};

export const useCategories = (parentId) => {
  return useQuery({
    queryKey: ["categories", parentId],
    queryFn: () => fetchCategories(parentId),
  });
};

//subCategories//
// const fetchSubCategories = async (parentId)=>{
//     const {data} = await axios.get(`https://client.mobile.chemanca.com/api/advertisements/AdsCategory/GetAllAdvertisementCategories?parentId=${parentId}`);

//     return data;
// }
// export const useSubCategories = (parentId) => {
//     return useQuery({
//       queryKey: ["subCategories",parentId],
//       queryFn: ()=>fetchSubCategories(parentId),
//       enabled: !!parentId,
//     });
//   };
