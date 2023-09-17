import { SectionTitle, CartsContainer, CheckoutTotals } from "../components";

const Cart = () => {
  return (
    <div>
      <SectionTitle text={"shopping cart"}/>
      <CartsContainer />
      <CheckoutTotals />
    </div>
  )
}
export default Cart