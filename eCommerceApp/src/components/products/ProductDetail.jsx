import { useParams } from "react-router";
import { Star, ChevronDown } from "lucide-react";
import { useGetSingleProductQuery } from "../../api/dummyDataApi";
import { ThreeDots } from "react-loader-spinner";

export default function ProductDetails() {
  const { id } = useParams();

  const { data, isLoading } = useGetSingleProductQuery(id);

//   console.log(id);
//   console.log(data);

  if (isLoading) {
    return (
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
    );
  }

  return (
    <>
      <section className="px-4 md:px-8 mt-6">
        <div className="max-w-xl mx-auto lg:max-w-6xl">
          <div className="grid items-start gap-8 lg:grid-cols-2 sm:gap-12 lg:gap-12">
            {/* IMAGE GALLERY */}
            <div className="w-full lg:sticky lg:top-0">
              <div className="flex flex-row gap-2">
                {/* Main Image */}
                <div className="flex-1 bg-gray-100 rounded overflow-hidden min-w-0">
                  <img
                    id="main-product-image"
                    src={
                      data?.images?.[0]
                    }
                    alt={data?.title || "Product"}
                    className="w-full aspect-[548/712] object-cover"
                  />
                </div>

                {/* Thumbnail Images */}
                <div
                  className="flex flex-col gap-3 w-16 max-sm:w-14 shrink-0"
                  role="listbox"
                  aria-label="Product image thumbnails"
                  aria-orientation="vertical"
                >
                  <button
                    type="button"
                    role="option"
                    aria-selected="true"
                    aria-label="View image 1"
                    className="thumb-btn aspect-[64/85] w-full cursor-pointer rounded border-b-2 border-black p-0 overflow-hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 focus-visible:rounded"
                  >
                    <img
                      src={data?.images?.[0]}
                      alt=""
                      aria-hidden="true"
                      className="w-full h-full object-cover object-top"
                    />
                  </button>

                  <button
                    type="button"
                    role="option"
                    aria-selected="false"
                    aria-label="View image 2"
                    className="thumb-btn aspect-[64/85] w-full cursor-pointer rounded border-b-2 border-transparent p-0 overflow-hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 focus-visible:rounded"
                  >
                    <img
                      src={data?.images?.[1] || data?.images?.[0]}
                      alt=""
                      aria-hidden="true"
                      className="w-full h-full object-cover object-top"
                    />
                  </button>

                  <button
                    type="button"
                    role="option"
                    aria-selected="false"
                    aria-label="View image 3"
                    className="thumb-btn aspect-[64/85] w-full cursor-pointer rounded border-b-2 border-transparent p-0 overflow-hidden focus-visible:outline-2 focus-visible:outline-offset-2 fodatadatacus-visible:outline-blue-600 focus-visible:rounded"
                  >
                    <img
                      src={data?.images?.[2] || data?.images?.[0]}
                      alt=""
                      aria-hidden="true"
                      className="w-full h-full object-cover object-top"
                    />
                  </button>

                  <button
                    type="button"
                    role="option"
                    aria-selected="false"
                    aria-label="View image 4"
                    className="thumb-btn aspect-[64/85] w-full cursor-pointer rounded border-b-2 border-transparent p-0 overflow-hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 focus-visible:rounded"
                  >
                    <img
                      src={data?.images?.[3] || data?.images?.[0]}
                      alt=""
                      aria-hidden="true"
                      className="w-full h-full object-cover object-top"
                    />
                  </button>
                </div>
              </div>
            </div>

            {/* PRODUCT INFO */}
            <div className="w-full" id="product-main">
              <div>
                <h1 className="text-xl font-bold text-slate-900 md:text-2xl">
                  {data?.title}
                </h1>

                <p className="text-slate-600 mt-2 text-sm">
                  {data?.description}
                </p>

                {/* PRICE */}
                <div className="flex items-center flex-wrap gap-4 mt-6">
                  <p className="text-slate-900 font-bold text-2xl md:text-3xl">
                    <span className="sr-only">Price:</span>${data?.price}
                  </p>

                  <p className="text-slate-600 text-lg">
                    <span className="text-sm ml-1.5">Tax included</span>
                  </p>
                </div>

                {/* RATING */}
                <div className="flex items-center gap-4 mt-4">
                  <div
                    className="flex items-center gap-1 text-lg px-2.5 bg-gray-100 border border-slate-200 text-slate-900 font-medium rounded-md"
                    role="img"
                    aria-label={`Rated ${data?.rating || 0} out of 5 stars`}
                  >
                    <span aria-hidden="true">{data?.rating || 0}</span>

                    <Star
                      size={14}
                      fill="currentColor"
                      className="text-yellow-400"
                    />
                  </div>

                  <p className="text-slate-600 text-sm">
                    <a
                      href="#customer-reviews"
                      className="hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
                    >
                      Customer reviews
                    </a>
                  </p>
                </div>
              </div>

              <hr className="my-6 border-slate-300" />

              {/* SIZES */}
              <div>
                <fieldset>
                  <legend className="text-lg font-semibold text-slate-900">
                    Sizes
                  </legend>

                  <div className="flex flex-wrap gap-4 mt-4">
                    <button
                      type="button"
                      aria-label="Size: Small"
                      className="w-10 h-9 text-slate-900 border border-slate-300 hover:border-blue-600 text-sm rounded-md cursor-pointer flex items-center justify-center shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                    >
                      SM
                    </button>

                    <button
                      type="button"
                      aria-label="Size: Medium"
                      className="w-10 h-9 text-slate-900 border border-slate-300 hover:border-blue-600 text-sm rounded-md cursor-pointer flex items-center justify-center shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                    >
                      MD
                    </button>

                    <button
                      type="button"
                      aria-label="Size: Large"
                      className="w-10 h-9 text-slate-900 border border-slate-300 hover:border-blue-600 text-sm rounded-md cursor-pointer flex items-center justify-center shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                    >
                      LG
                    </button>

                    <button
                      type="button"
                      aria-label="Size: Extra Large"
                      className="w-10 h-9 text-slate-900 border border-slate-300 hover:border-blue-600 text-sm rounded-md cursor-pointer flex items-center justify-center shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                    >
                      XL
                    </button>
                  </div>
                </fieldset>

                {/* ACTION BUTTONS */}
                <div className="mt-6 flex flex-wrap gap-4">
                  <button
                    type="button"
                    className="w-[45%] px-4 py-2.5 text-slate-900 text-sm font-semibold rounded-md cursor-pointer bg-white border border-slate-300 transition-colors hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                  >
                    Add to wishlist
                  </button>

                  <button
                    type="button"
                    className="w-[45%] px-4 py-2.5 text-white text-sm font-semibold rounded-md cursor-pointer bg-blue-600 hover:bg-blue-700 border border-blue-600 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                  >
                    Add to cart
                  </button>
                </div>
              </div>

              <hr className="my-6 border-slate-300" />

              <hr className="my-6 border-slate-300" />

              {/* DETAILS */}
              <div className="space-y-6">
                {/* PRODUCT DETAILS */}
                <div>
                  <h3>
                    <button
                      type="button"
                      id="detail-1-button"
                      aria-expanded="true"
                      aria-controls="detail-1"
                      className="accordion-button text-sm text-left font-semibold text-slate-900 flex items-center gap-4 cursor-pointer w-full transition-all hover:text-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                    >
                      <span>Product details</span>

                      <ChevronDown
                        size={16}
                        className="ml-auto shrink-0 rotate-180 transition-all duration-300"
                      />
                    </button>
                  </h3>

                  <div
                    id="detail-1"
                    role="region"
                    aria-labelledby="detail-1-button"
                    className="accordion-content overflow-hidden transition-[max-height] duration-300 ease-in-out"
                  >
                    <div className="mt-4 p-4 bg-gray-50">
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {data?.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* VENDOR DETAILS */}
                <div>
                  <h3>
                    <button
                      type="button"
                      id="detail-2-button"
                      aria-expanded="false"
                      aria-controls="detail-2"
                      className="accordion-button text-sm text-left font-semibold text-slate-900 flex items-center gap-4 cursor-pointer w-full transition-all hover:text-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                    >
                      <span>Vendor details</span>

                      <ChevronDown
                        size={16}
                        className="ml-auto shrink-0 transition-all duration-300"
                      />
                    </button>
                  </h3>

                  <div
                    id="detail-2"
                    role="region"
                    aria-labelledby="detail-2-button"
                    style={{ maxHeight: 0 }}
                    className="accordion-content overflow-hidden transition-[max-height] duration-300 ease-in-out"
                  >
                    <div className="mt-4 p-4 bg-gray-50">
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Vendor information will appear here.
                      </p>
                    </div>
                  </div>
                </div>

                {/* RETURN POLICY */}
                <div>
                  <h3>
                    <button
                      type="button"
                      id="detail-3-button"
                      aria-expanded="false"
                      aria-controls="detail-3"
                      className="accordion-button text-sm text-left font-semibold text-slate-900 flex items-center gap-4 cursor-pointer w-full transition-all hover:text-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                    >
                      <span>Return and exchange policy</span>

                      <ChevronDown
                        size={16}
                        className="ml-auto shrink-0 transition-all duration-300"
                      />
                    </button>
                  </h3>

                  <div
                    id="detail-3"
                    role="region"
                    aria-labelledby="detail-3-button"
                    style={{ maxHeight: 0 }}
                    className="accordion-content overflow-hidden transition-[max-height] duration-300 ease-in-out"
                  >
                    <div className="mt-4 p-4 bg-gray-50">
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Return and exchange policy information will appear here.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <hr className="my-6 border-slate-300" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}