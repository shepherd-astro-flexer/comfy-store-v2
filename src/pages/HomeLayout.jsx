import { Outlet, useNavigation } from "react-router-dom";
import { Navbar, Header, Loading } from "../components";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateTotalAmount } from "../features/cart/cartSlice";

const HomeLayout = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch()
  const isLoading = navigation.state === "loading";
  const {cartItems} = useSelector((store) => store.cart)
 
  useEffect(() => {
      localStorage.setItem("cartItems", JSON.stringify(cartItems))
      dispatch(updateTotalAmount())
  }, [cartItems])

  return (
    <div>
      <Header />
      <Navbar />
      {isLoading ? (
        <Loading/>
      ) : (
        <section className="align-element py-20">
          <Outlet />
        </section>
      )}
    </div>
  );
};
export default HomeLayout;
