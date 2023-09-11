import { Link } from "react-router-dom";

const ProductsGrid = ({ products }) => {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {products.map(({ id, attributes }) => {
        const { title, image, price } = attributes;
        return (
          <Link
            key={id}
            className="shadow-xl rounded-lg px-4 pt-4 transition-shadow ease-in-out hover:shadow-2xl"
            to={`/products/${id}`}
          >
            <img
              className="h-44 object-cover rounded-lg w-full md:h-48"
              src={image}
              alt={title}
            />
            <div className="p-8 grid place-items-center">
              <p className="text-xl font-semibold capitalize tracking-wide space-wide">
                {title}
              </p>
              <p className="text-secondary">${price}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};
export default ProductsGrid;
