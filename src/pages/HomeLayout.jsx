import { Outlet, useNavigation } from "react-router-dom";
import { Navbar } from "../components";

const HomeLayout = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div>
      <Navbar />
      {isLoading ? (
        <h3>Loading...</h3>
      ) : (
        <section className="align-element py-20">
          <Outlet />
        </section>
      )}
    </div>
  );
};
export default HomeLayout;
