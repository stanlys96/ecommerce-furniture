import { LatestProduct } from "./LatestProduct";

type Props = {
  data: any;
};

export const LatestProducts = (data: Props) => {
  return (
    <div>
      <p className="text-darkBlue font-bold text-center text-[42px] mb-[20px]">
        Latest Products
      </p>
      <div className="flex justify-center items-center gap-x-10">
        <a className="text-secondBlue" href="#">
          New Arrival
        </a>
        <a className="text-secondBlue" href="#">
          Best Seller
        </a>
        <a className="text-secondBlue" href="#">
          Featured
        </a>
        <a className="text-secondBlue" href="#">
          Special Offer
        </a>
      </div>
      <div className="grid grid-cols-3 gap-x-8 justify-stretch">
        {data?.data?.map((product: any, idx: any) => (
          <LatestProduct
            id={product.id}
            imgUrl={product.img_url}
            title={product.name}
            price={product.price}
            key={idx}
          />
        ))}
      </div>
    </div>
  );
};
