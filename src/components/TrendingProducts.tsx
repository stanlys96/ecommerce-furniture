import { ExecutiveProduct } from "./ExecutiveProduct";
import { TrendingProduct } from "./TrendingProduct";

type Props = {
  trendingData: any;
  executiveData: any;
};

export const TrendingProducts = ({ trendingData, executiveData }: Props) => {
  return (
    <div className="mb-[50px]">
      <div>
        <p className="text-darkBlue font-bold text-center text-[42px] mb-[20px]">
          Trending Products
        </p>
        <div className="grid grid-cols-4 gap-x-8">
          {trendingData?.map((product: any, idx: any) => (
            <TrendingProduct
              imgUrl={product.img_url}
              title={product.name}
              price={product.price}
              key={idx}
            />
          ))}
        </div>
      </div>
      <div className="mt-[20px]">
        <div className="grid grid-cols-4 gap-x-8">
          <div className="col-span-3 grid grid-cols-2 gap-x-4 h-96">
            <div className="bg-lightPink p-4 h-64 relative">
              <p className="text-secondBlue text-xl">23% off in all products</p>
              <p className="text-pink border-b border-pink inline-block pb-0 text-base mt-2">
                Shop Now
              </p>
              <img
                alt="walao"
                src="/img/speaker.png"
                className="absolute right-0 bottom-0 w-[213px] h-[207px]"
              />
            </div>
            <div className="bg-secondGray p-4 h-64 mt-auto relative">
              <p className="text-secondBlue text-xl">23% off in all products</p>
              <p className="text-pink border-b border-pink inline-block pb-0 text-base mt-2">
                View Collection
              </p>
              <img
                alt="walao"
                src="/img/drawboard.png"
                className="absolute right-0 bottom-0 w-[312px] h-[173px]"
              />
            </div>
          </div>
          <div className="flex flex-col gap-y-2">
            {executiveData?.map((product: any, idx: any) => (
              <ExecutiveProduct
                imgUrl={product.img_url}
                title={product.name}
                price={product.price}
                key={idx}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
