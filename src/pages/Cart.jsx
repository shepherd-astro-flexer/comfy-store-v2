import { useSelector } from "react-redux";
import { SectionTitle, CartsContainer} from "../components";

const Cart = () => {
  const {cartItems} = useSelector((store) => store.cart)
  
  return (
    <div>
      <SectionTitle text={cartItems.length > 1 ? "shopping cart" : "your cart is empty"}/>
      {cartItems.length > 0 && <CartsContainer />}
    </div>
  )
}
export default Cart