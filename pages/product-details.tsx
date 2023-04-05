import { Jumbotron } from "@/src/components/Jumbotron";
import { ProductDetail } from "@/src/components/ProductDetail";
import { ProductDetailsDescription } from "@/src/components/ProductDetailsDescription";
import { RelatedProducts } from "@/src/components/RelatedProducts";
import { Sponsors } from "@/src/components/Sponsors";

export default function ProductDetails() {
  return (
    <div>
      <Jumbotron title="Product Details" subTitle="Product Details" />
      <div className="py-[100px]">
        <ProductDetail />
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
