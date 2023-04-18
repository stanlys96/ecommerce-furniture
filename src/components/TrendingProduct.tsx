import Image from "next/image";
import { useRouter } from "next/router";

type Props = {
  id: string;
  imgUrl: string;
  title: string;
  price: string;
};

export const TrendingProduct = ({ id, imgUrl, title, price }: Props) => {
  const router = useRouter();
  return (
    <div className="px-2 pt-2 pb-8 shadow-lg-custom">
      <div className="bg-fifthGray p-5">
        <img
          className="w-[171px] h-[171px]"
          width={171}
          height={171}
          alt="walao"
          src={imgUrl}
        />
      </div>
      <div className="text-center">
        <a
          onClick={() => router.push(`/shop/${id}`)}
          className="my-2 text-secondBlue font-bold cursor-pointer inline-block"
        >
          {title}
        </a>
        <div className="flex gap-x-2 justify-center items-center">
          <p className="text-sm text-secondBlue">${price}.00</p>
          <p className="text-sm text-secondBlue30">
            <s>${price}.00</s>
          </p>
        </div>
      </div>
    </div>
  );
};
