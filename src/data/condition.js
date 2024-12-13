
import { useCategoryDetails } from "../api/CategoriesApi"


export const conditions = [
    {condition: categoryDetails.hasDepositeFilter, component: <NumericComponent key="deposit" />}
]