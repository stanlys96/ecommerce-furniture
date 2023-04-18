import { FeaturedProduct } from "./FeaturedProduct";

type Props = {
  data: any;
};

export const FeaturedProducts = (data: Props) => {
  return (
    <div className="mb-[50px]">
      <p className="text-darkBlue font-bold text-center text-[42px] mb-[20px]">
        Featured Products
      </p>
      <div className="grid grid-cols-4 gap-x-8">
        {data?.data?.map((product: any, idx: any) => (
          <FeaturedProduct
            id={product.id}
            imgUrl={product.img_url}
            title={product.name}
            price={product.price}
            code={product.code}
            key={idx}
          />
        ))}
      </div>
    </div>
  );
};
