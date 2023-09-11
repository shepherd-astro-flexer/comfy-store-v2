import { Outlet, useNavigation } from "react-router-dom";
import { Navbar, Header } from "../components";

const HomeLayout = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div>
      <Header />
      <Navbar />
      {isLoading ? (
        <section className="grid place-items-center h-screen">
          <span className="loading loading-spinner loading-lg"></span>
        </section>
      ) : (
        <section className="align-element py-20">
          <Outlet />
        </section>
      )}
    </div>
  );
};
export default HomeLayout;
