import Image from "next/image";

type Props = {
  imgUrl: string;
  title: string;
  code: string;
  price: string;
};

export const FeaturedProduct = ({ imgUrl, title, code, price }: Props) => {
  console.log(imgUrl, "???");
  return (
    <div className="shadow-lg-custom">
      <div className="bg-gray p-5 relative flex justify-center items-center">
        <img className="w-[178px] h-[178px]" src={imgUrl} alt="walao" />
      </div>
      <div className="flex flex-col justify-center items-center pb-3">
        <p className="text-pink font-bold my-3">{title}</p>
        <div className="flex gap-x-2">
          <div className="h-[4px] w-[14px] rounded-[10px] bg-green"></div>
          <div className="h-[4px] w-[14px] rounded-[10px] bg-secondPink"></div>
          <div className="h-[4px] w-[14px] rounded-[10px] bg-primary"></div>
        </div>
        <p className="text-secondBlue my-3">Code - {code}</p>
        <p className="text-secondBlue">${price}.00</p>
      </div>
    </div>
  );
};
