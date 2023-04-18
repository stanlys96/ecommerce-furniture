import { useRouter } from "next/router";

type Props = {
  title: string;
  price: number;
  image_url: string;
  id: string;
};

export const GridProduct = ({ title, price, image_url, id }: Props) => {
  const router = useRouter();
  return (
    <div className="flex flex-col justify-center">
      <div className="flex justify-center items-center bg-gray p-8 mb-[10px]">
        <img src={image_url} className="w-[167px] h-[167px]" alt="walao" />
      </div>
      <a
        onClick={() => router.push(`/shop/${id}`)}
        className="text-secondBlue text-base font-bold text-center cursor-pointer"
      >
        {title}
      </a>
      <div className="flex items-center gap-x-2 justify-center my-[10px]">
        <div className="w-[10px] h-[10px] rounded-full bg-thirdOrange"></div>
        <div className="w-[10px] h-[10px] rounded-full bg-sixthPink"></div>
        <div className="w-[10px] h-[10px] rounded-full bg-thirdPurple"></div>
      </div>
      <div className="flex gap-x-2 justify-center">
        <p className="text-secondBlue text-sm">${price}.00</p>
        <p className="text-pink text-sm">
          <s>${price + 15}.00</s>
        </p>
      </div>
    </div>
  );
};
