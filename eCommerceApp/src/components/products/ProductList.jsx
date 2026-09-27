import ProductCard from "./ProductCard";
import { useGetAllProductsQuery } from "../../api/dummyDataApi";
import { ThreeDots } from "react-loader-spinner";

export default function ProductList() {
  const { data, isLoading } = useGetAllProductsQuery();

  const products = data?.products;

  return isLoading ? (
    <section className="h-screen flex items-center justify-center">
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="black"
        ariaLabel="three-dots-loading"
        visible={true}
      />
    </section>
  ) : (
    <section className="mt-6 px-4 md:px-8" aria-labelledby="products-heading">
      <div className="mx-auto max-w-4xl lg:max-w-7xl">
        <h2
          id="products-heading"
          className="text-2xl font-bold text-slate-900 mb-8"
        >
          Premium Threads
        </h2>

        <ul className="grid grid-cols-2 gap-4 md:gap-8 sm:grid-cols-3 lg:grid-cols-4">
          {products?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ul>
      </div>
    </section>
  );
}
