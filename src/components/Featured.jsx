import ProductsGrid from "./ProductsGrid";
import SectionTitle from "./SectionTitle";

const Featured = ({ featured }) => {
  console.log(featured);
  return (
    <div className="pt-24">
        <SectionTitle text="featured products"/>
        <ProductsGrid products={featured} />
    </div>
  );
};
export default Featured;


