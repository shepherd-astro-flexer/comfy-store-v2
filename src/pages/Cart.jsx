import { useSelector } from "react-redux"

const Cart = () => {
  const {cartItems} = useSelector((store) => store.cart)
  console.log(cartItems);
  return (
    <div>Cart</div>
  )
}
export default Cart