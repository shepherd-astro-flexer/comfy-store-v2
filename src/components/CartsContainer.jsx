import CartItems from "./CartItems"
import CheckoutTotals from "./CheckoutTotals"

const CartsContainer = () => {
  return (
    <div className="flex flex-col mt-8 lg:flex-row gap-x-12">
        <CartItems />
        <CheckoutTotals/>
    </div>
    
  )
}
export default CartsContainer