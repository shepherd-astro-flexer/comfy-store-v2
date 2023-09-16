import { useQuery } from "@tanstack/react-query"
import { Form, useLoaderData} from "react-router-dom"
import { customFetch } from "../utils"
import { Filters, Pagination } from "../components"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { getCartItems } from "../features/filter/filterSlice"
import ProductsContent from "../components/ProductsContent"


const fetchFeaturedQuery = (params) => {
 
  return {
      queryKey: ["products", {...params}],
      queryFn: async () => {
          const {data} = await customFetch.get("/products", {
            // ? spread the params on this params prop?
            params: {
              ...params
            }
          })
          return data
      }
  }
}

export const loader = (queryClient) => async ({request}) => {
  // ! need an object
  const url = new URL(request.url)
  console.log(url, request);
  
  const search = url?.search?.slice(1)?.split("&")?.map(item => item.split("="))

  let searchObj = {} 
  // * need to have an if here, where if search is true that is the only time I want to loop over
  
  if (url.searchParams.size >= 1) {
    searchObj = Object.fromEntries(search)
  }
  // ! how do we append and remove params? is this the solution?
  await queryClient.ensureQueryData(fetchFeaturedQuery(searchObj))
  return searchObj
}

const Products = () => {
  const searchObj = useLoaderData()

  const {data: {data: products, meta}} = useQuery(fetchFeaturedQuery(searchObj))
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCartItems(products))
  }, [products])
  // * pageArray

  return (
    <Form>
      <Filters products={products} meta={meta} searchObj={searchObj} />
      <ProductsContent products={products} meta={meta} />
      <Pagination meta={meta} searchObj={searchObj}/>
    </Form>
  )
}

export default Products