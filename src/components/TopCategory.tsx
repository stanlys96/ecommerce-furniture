import { useRouter } from "next/router";

type Props = {
  id: string;
  imgUrl: string;
  title: string;
  price: string;
};

export const TopCategory = ({ id, imgUrl, title, price }: Props) => {
  const router = useRouter();
  return (
    <div>
      <div className="rounded-full bg-gray p-8 flex items-center justify-center">
        <img className="w-[158px] h-[158px]" src={imgUrl} alt="walao" />
      </div>
      <a
        onClick={() => router.push(`/shop/${id}`)}
        className="text-secondBlue text-lg text-center my-2 cursor-pointer inline-block w-full font-bold"
      >
        {title}
      </a>
      <p className="text-secondBlue text-lg text-center">${price}.00</p>
    </div>
  );
};
