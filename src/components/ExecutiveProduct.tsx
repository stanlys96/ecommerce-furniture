type Props = {
  imgUrl: string;
  title: string;
  price: string;
};

export const ExecutiveProduct = ({ imgUrl, title, price }: Props) => {
  return (
    <div className="flex gap-x-2">
      <div className="p-5 bg-fifthGray">
        <img
          className="h-[74px] w-[107px]"
          src={imgUrl}
          height={74}
          width={107}
          alt="walao"
        />
      </div>
      <div className="flex flex-col justify-center gap-y-2">
        <p className="text-secondBlue text-base">{title}</p>
        <p className="text-secondBlue text-xs">${price}.00</p>
      </div>
    </div>
  );
};
