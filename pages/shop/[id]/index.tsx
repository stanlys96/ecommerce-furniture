import { Jumbotron } from "@/src/components/Jumbotron";
import { ProductDetail } from "@/src/components/ProductDetail";
import { ProductDetailsDescription } from "@/src/components/ProductDetailsDescription";
import { RelatedProducts } from "@/src/components/RelatedProducts";
import { Sponsors } from "@/src/components/Sponsors";
import { fetcher } from "@/utils/axios";
import { useRouter } from "next/router";
import { Audio } from "react-loader-spinner";
import useSWR from "swr";

export default function ProductDetails() {
  const router = useRouter();
  const { data } = useSWR(
    `/furniture/products/getProduct/${router.query.id}`,
    fetcher
  );
  console.log(data, "<<<");
  return (
    <div>
      <Jumbotron title="Product Details" subTitle="Product Details" />
      <div className="py-[100px]">
        {data ? (
          <ProductDetail data={{ ...data?.data?.data[0] }} />
        ) : (
          <div className="w-full flex justify-center items-center">
            <Audio height="80" width="80" color="green" ariaLabel="loading" />
          </div>
        )}
      </div>
      <div className="bg-thirteenthGray py-[75px]">
        <ProductDetailsDescription />
      </div>
      <div className="container mx-auto px-[150px] py-[75px]">
        <RelatedProducts />
        <div className="mt-[100px]">
          <Sponsors />
        </div>
      </div>
    </div>
  );
}
