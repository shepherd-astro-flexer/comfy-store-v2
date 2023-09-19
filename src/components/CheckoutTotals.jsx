import { useSelector } from "react-redux"
import { formatPrice } from "../utils"
import { Link } from "react-router-dom"

const CheckoutTotals = () => {
  const {prices} = useSelector((store) => store.cart)
  const {total, shipping, orderTotal, tax} = prices

  return (
    <div className="lg:basis-4/12">
      <div className="card card-body text-xs mb-8 px-8 py-6 bg-[#181920]">
        <div className="flex justify-between py-2 capitalize border-b border-black">
          <span>subtotal</span><span className="font-semibold">{formatPrice(total)}</span>
        </div>
        <div className="flex justify-between py-2 capitalize border-b border-black">
          <span>shipping</span><span className="font-semibold">{formatPrice(shipping)}</span>
        </div>
        <div className="flex justify-between py-2 capitalize border-b border-black">
          <span>tax</span><span className="font-semibold">{formatPrice(tax)}</span>
        </div>
        <div className="flex justify-between capitalize text-sm py-4">
          <span>order total</span><span className="font-semibold">{formatPrice(orderTotal)}</span>
        </div>
      </div>
      <Link className="btn btn-secondary btn-block" to="/checkout">proceed to checkout</Link>
  </div>
  )
}
export default CheckoutTotals