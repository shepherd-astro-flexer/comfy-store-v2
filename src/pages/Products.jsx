import { useQuery } from "@tanstack/react-query";
import { useLoaderData } from "react-router-dom";
import { customFetch } from "../utils";
import { Filters, Pagination } from "../components";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCartItems } from "../features/filter/filterSlice";
import ProductsContent from "../components/ProductsContent";

const fetchFeaturedQuery = (params) => {
  return {
    queryKey: ["products", { ...params }],
    queryFn: async () => {
      const { data } = await customFetch.get("/products", {
        params,
      });
      return data;
    },
  };
};

export const loader =
  (queryClient) =>
  async ({ request }) => {
    const searchObj = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ]);

    await queryClient.ensureQueryData(fetchFeaturedQuery(searchObj));
    return searchObj;
  };

const Products = () => {
  const searchObj = useLoaderData();

  const {
    data: { data: products, meta },
  } = useQuery(fetchFeaturedQuery(searchObj));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCartItems(products));
  }, [products]);

  return (
    <div>
      <Filters products={products} meta={meta} searchObj={searchObj} />
      <ProductsContent products={products} meta={meta} />
      <Pagination meta={meta} searchObj={searchObj} />
    </div>
  );
};

export default Products;
