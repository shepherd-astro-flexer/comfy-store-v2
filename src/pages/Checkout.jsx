import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"
import { toast } from "react-toastify"

const Checkout = () => {
  const user = useSelector((store) => store.user.user)
  
  if (!user) {
    toast.warn("You must be logged in to checkout")
    return <Navigate to="/login" />
  }

  return (
    <div>Checkout</div>
  )
}
export default Checkout