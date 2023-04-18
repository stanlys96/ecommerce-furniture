import Image from "next/image";
import { useRouter } from "next/router";

type Props = {
  id: string;
  imgUrl: string;
  title: string;
  code: string;
  price: string;
};

export const FeaturedProduct = ({ id, imgUrl, title, code, price }: Props) => {
  const router = useRouter();
  return (
    <div className="shadow-lg-custom">
      <div className="bg-gray p-5 relative flex justify-center items-center">
        <img className="w-[178px] h-[178px]" src={imgUrl} alt="walao" />
      </div>
      <div className="flex flex-col justify-center items-center pb-3">
        <a
          onClick={() => router.push(`/shop/${id}`)}
          className="text-pink font-bold my-3 cursor-pointer"
        >
          {title}
        </a>
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
