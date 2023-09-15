import { Link } from "react-router-dom";
import { formatPrice } from "../utils";

const ProductsList = ({ products }) => {
  if (products.length < 1) {
    return <div className="pt-16">
      <h2 className="text-2xl">Sorry, no products matched your search...</h2>
    </div>
  }

  return (
    <div className="pt-12 grid gap-6">
      {products.map(({ id, attributes }) => {
        const { title, image, price, company } = attributes;
        return (
          <Link
            key={id}
            className="flex flex-col gap-y-4 p-8 card-side rounded-lg w-full shadow-xl hover:shadow-2xl transition duration-300 sm:flex-row sm:justify-between"
            to={`/products/${id}`}
          >
            <figure className="">
              <img
                className="h-24 w-24 rounded-lg object-cover ease-in-out sm:h-32 sm:w-32  duration-300 hover:scale-105"
                src={image}
                alt={title}
              />
            </figure>
            <div className="card-side sm:grow sm:ml-16">
              <p className="card-side text-lg font-medium capitalize tracking-normal">
                {title}
              </p>
              <p className="text-gray-300">{company}</p>
            </div>
            <div>
                <p className="text-lg font-semibold">{formatPrice(price)}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};
export default ProductsList;
