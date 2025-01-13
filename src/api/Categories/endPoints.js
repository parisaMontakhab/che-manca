export const CATEGORIES_EP = (parentId) =>
  `/advertisements/AdsCategory/GetAllAdvertisementCategories?parentId=${parentId}`;

export const CATEGORYDETAILS_EP = (adsCategoryId)=>
  `/advertisements/AdsCategoryDetail/GetAllAdvertisementCategoryDetails?categoryId=${adsCategoryId}`;

//pure functions: same input same output
//predectible output
//not affect on outside of scope
