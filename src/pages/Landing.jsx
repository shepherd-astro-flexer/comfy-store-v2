import { Featured, Hero } from "../components"
import { useLoaderData } from "react-router-dom"
import {customFetch} from "../utils"
import { useQuery } from "@tanstack/react-query"

const fetchFeaturedQuery = (val) => {
  return {
      queryKey: ["products", val],
      queryFn: async () => {
          const {data: {data}} = await customFetch.get("/products", {
            params: {
              featured: true
            }
          })
          return data
      }
  }
}

export const loader = (queryClient) => async () => {
  const val = "featured"
  await queryClient.ensureQueryData(fetchFeaturedQuery(val))
  return val
}

const Landing = () => {
  const val = useLoaderData()

  const {data: featured} = useQuery(fetchFeaturedQuery(val))
  return (
    <>
      <Hero/>
      <Featured featured={featured}/>
    </>
  )
}
export default Landing