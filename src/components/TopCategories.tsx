import { TopCategory } from "./TopCategory";

type Props = {
  data: any;
};

export const TopCategories = (data: Props) => {
  return (
    <div className="mt-[50px]">
      <p className="text-darkBlue font-bold text-center text-[42px] mb-[30px]">
        Top Categories
      </p>
      <div className="grid grid-cols-4 gap-x-8">
        {data?.data?.map((product: any, idx: any) => (
          <TopCategory
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
