import { Outlet, useNavigation } from "react-router-dom";
import { Navbar, Header, Loading } from "../components";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const HomeLayout = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  const {cartItems} = useSelector((store) => store.cart)
 
  useEffect(() => {
      localStorage.setItem("cartItems", JSON.stringify(cartItems))
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
