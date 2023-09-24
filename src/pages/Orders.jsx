import { toast } from "react-toastify"
import { OrdersContent, OrdersPagination, SectionTitle } from "../components"
import { customFetch } from "../utils"
import { useLoaderData } from "react-router-dom"
import { useQuery } from "@tanstack/react-query"

const fetchOrderQuery = (token) => {
  return {
    queryKey: ["products", token],
    queryFn: async () => {
      try {
        const {data: {data, meta}} = await customFetch("/orders", {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
    
        return {data, meta}
      } catch (error) {
        toast.warn("Error fetching orders")
        return error
      }
    }
  }
}

export const loader = (store, queryClient) => async () => {
  const {user} = store.getState().user
  await queryClient.ensureQueryData(fetchOrderQuery(user.token))

  return user.token
}

const Orders = () => {
  const token = useLoaderData()
  const {data} = useQuery(fetchOrderQuery(token))

  return (
    <div>
      <SectionTitle text="Your Orders" />
      <OrdersContent {...data} />
      // ! pagination
      <OrdersPagination {...data}/>
    </div>
  )
}
export default Orders