import { useQuery } from "@tanstack/react-query"
import { getProductsAction } from "../actions/get-products.action"

export const useProducts = () => {
    //Toda la logica
  return useQuery({
    queryKey: ['products'],
    queryFn: getProductsAction
  })
}
