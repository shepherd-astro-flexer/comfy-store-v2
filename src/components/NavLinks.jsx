import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const links = [
  { id: 1, url: "/", text: "home" },
  { id: 2, url: "/about", text: "about" },
  { id: 3, url: "/products", text: "products" },
  { id: 4, url: "/cart", text: "cart" },
  { id: 5, url: "/checkout", text: "checkout" },
  { id: 6, url: "/orders", text: "orders" },
];

const NavLinks = () => {
  const user = useSelector((store) => store.user.user)
  
  return (
    <>
      {links.map((link) => {
        const { id, url, text } = link;

        return (
          <li key={id}>
            <NavLink className={`${!user && text === "checkout" || !user && text === "orders" ? "hidden" : null} capitalize`} to={url}>
              {text}
            </NavLink>
          </li>
        );
      })}
    </>
  );
};
export default NavLinks;
