import { useQuery } from "@tanstack/react-query"
import { customFetch } from "../utils"
import { useLoaderData } from "react-router-dom"
import { Navigations, SingleProductDetails } from "../components"

const singleProductQuery = (val) => {
  return {
    queryKey: ["products", val],
    queryFn: async ()=> {
      const {data: {data}} = await customFetch.get(`/products/${val}`)
      return data
    }
  }
}

export const loader = (queryClient) => async ({params}) => {
  const id = params.id
  await queryClient.ensureQueryData(singleProductQuery(id))
  return id
}

const SingleProduct = () => {
  const id = useLoaderData()
  const {data: products} = useQuery(singleProductQuery(id))

  return (
    <div>
      <Navigations />
      <SingleProductDetails products={products}/>
    </div>
  )
}
export default SingleProduct