type Props = {
  imgUrl: string;
  title: string;
  price: string;
};

export const TopCategory = ({ imgUrl, title, price }: Props) => {
  return (
    <div>
      <div className="rounded-full bg-gray p-8 flex items-center justify-center">
        <img className="w-[158px] h-[158px]" src={imgUrl} alt="walao" />
      </div>
      <p className="text-secondBlue text-lg text-center my-2">{title}</p>
      <p className="text-secondBlue text-lg text-center">${price}.00</p>
    </div>
  );
};
