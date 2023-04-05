import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import Image from "next/image";

export const ListProduct = () => {
  const stars = [1, 2, 3, 4, 5];

  return (
    <div className="flex gap-x-6 items-center shadow-lg p-4">
      <div>
        <Image src="/img/list-img-1.png" width={313} height={217} alt="walao" />
      </div>
      <div className="flex flex-col gap-y-3">
        <div className="flex gap-x-4 items-center">
          <p className="text-secondBlue text-base font-bold">
            Accumsan tincidunt
          </p>
          <div className="flex gap-x-1">
            <div className="bg-fourthOrange h-[12px] w-[12px] rounded-full"></div>
            <div className="bg-seventhPink h-[12px] w-[12px] rounded-full"></div>
            <div className="bg-fourthPurple h-[12px] w-[12px] rounded-full"></div>
          </div>
        </div>
        <div className="flex gap-x-2 items-center">
          <p className="text-secondBlue text-base">$26.00</p>
          <p className="text-pink text-base">
            <s>$52.00</s>
          </p>
          <div className="flex gap-x-1 items-center">
            {stars.map((data, idx) => (
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
        <p className="text-twentiethGray text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est
          adipiscing in phasellus non in justo.
        </p>
        <div className="flex gap-x-3">
          <div className="shadow-lg rounded-xl flex justify-center items-center cursor-pointer">
            <AiOutlineShoppingCart width={19} height={19} />
          </div>
          <div className="shadow-lg rounded-xl flex justify-center items-center cursor-pointer">
            <AiOutlineHeart width={19} height={19} />
          </div>
          <div className="shadow-lg rounded-xl flex justify-center items-center cursor-pointer">
            <AiOutlineSearch width={19} height={19} />
          </div>
        </div>
      </div>
    </div>
  );
};
