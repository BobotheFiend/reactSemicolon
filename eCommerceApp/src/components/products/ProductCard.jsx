import { Link } from "react-router";
import { useAddToCartMutation } from "../../api/dummyDataApi";

const ProductCard = ({ product }) => {
  const [addToCart, { isLoading }] = useAddToCartMutation();

  const handleAddToCart = async () => {
    try {
      const response = await addToCart({
        userId: 1,
        products: [
          {
            id: product.id,
            quantity: 1,
          },
        ],
      }).unwrap();

      // console.log(response);
      console.log("NEW CART:", response);
      console.log(
        "NEW CART PRODUCTS:",
        JSON.stringify(response.products, null, 2),
      );
    } catch (error) {
      console.error("Failed to add product to cart:", error);
    }
  };

  return (
    <li
      key={product.id}
      className="bg-white flex flex-col rounded-md border border-slate-200 shadow-sm relative"
    >
      <Link
        to={`/products/${product.id}`}
        className="rounded-md block overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
      >
        <img
          src={product.images[0]}
          alt={product.title}
          className="w-full aspect-[18/24] object-cover object-top"
        />

        <div className="p-4">
          <h3 className="text-sm md:text-base font-semibold text-slate-900 line-clamp-2">
            {product.title}
          </h3>

          <p className="text-base mt-2 font-semibold text-slate-700">
            ${product.price}
          </p>
        </div>
      </Link>

      <div className="p-4 pt-0">
        <button
          type="button"
          onClick={handleAddToCart}
          disabled={isLoading}
          aria-label={`Add ${product.title} to cart`}
          className="w-full cursor-pointer text-sm px-3.5 py-2 font-semibold rounded-md bg-blue-600 hover:bg-blue-700 text-white border border-blue-600 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 disabled:opacity-50"
        >
          {isLoading ? "Adding..." : "Add to cart"}
        </button>
      </div>
    </li>
  );
};

export default ProductCard;