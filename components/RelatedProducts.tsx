import { RelatedProduct } from "./RelatedProduct";

export const RelatedProducts = () => {
  return (
    <div>
      <p className="text-secondBlue text-[28px] font-bold">Related Products</p>
      <div className="grid grid-cols-4 gap-x-6 mt-[20px]">
        <RelatedProduct />
        <RelatedProduct />
        <RelatedProduct />
        <RelatedProduct />
      </div>
    </div>
  );
};
