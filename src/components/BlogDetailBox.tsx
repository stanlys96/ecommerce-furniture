import Image from "next/image";

type Props = {
  imgUrl: string;
  title: string;
  price: string;
  stars: number;
};

function createStarsElement(input: any) {
  const result = [];
  for (let i = 0; i < input; i++) {
    result.push(i);
  }
  return result;
}

export const BlogDetailBox = ({ imgUrl, title, price, stars }: Props) => {
  const starsData = createStarsElement(stars);
  return (
    <div>
      <Image src={imgUrl} width={210} height={254} alt="walao" />
      <p className="text-secondBlue text-base text-center my-1 font-bold">
        {title}
      </p>
      <div className="flex gap-x-2 items-center">
        <p className="text-secondBlue text-[12px]">${price}.00</p>
        <p className="text-pink text-[12px]">
          <s>${Number(price) + 25}.00</s>
        </p>
        <div className="flex gap-x-1 items-center">
          {starsData.map((data, idx) => (
            <Image
              key={idx}
              width={12}
              height={12}
              src="/img/star.png"
              alt="walao"
            />
          ))}
        </div>
      </div>
    </div>
  );
};
