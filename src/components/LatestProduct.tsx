type Props = {
  imgUrl: string;
  title: string;
  price: string;
};

export const LatestProduct = ({ imgUrl, title, price }: Props) => {
  return (
    <div className="mt-[50px]">
      <div className="bg-darkGray p-8">
        <img className="w-[222px] h-[222px]" src={imgUrl} alt="walao" />
      </div>
      <div className="flex justify-between items-center mt-3">
        <p className="text-secondBlue text-base border-b-2 border-secondGray">
          {title}
        </p>
        <div className="flex gap-x-1">
          <p className="text-secondBlue text-xs">${price}.00</p>
          <p className="text-pink text-xs">
            <s>${Number(price) + 25}.00</s>
          </p>
        </div>
      </div>
    </div>
  );
};
