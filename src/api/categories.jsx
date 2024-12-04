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
