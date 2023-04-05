import Image from "next/image";
import { AiOutlineHeart } from "react-icons/ai";

export const ProductDetail = () => {
  const stars = [1, 2, 3, 4, 5];
  return (
    <div className="container mx-auto px-[150px]">
      <div className="shadow-lg-custom p-4">
        <div className="grid grid-cols-8 gap-x-4">
          <div className="col-span-1 grid grid-rows-3 gap-y-4 relative">
            <div className="relative">
              <Image src="/img/bag-1-detail-1.png" fill alt="WALAO" />
            </div>
            <div className="relative">
              <Image src="/img/bag-1-detail-1.png" fill alt="WALAO" />
            </div>
            <div className="relative">
              <Image src="/img/bag-1-detail-1.png" fill alt="WALAO" />
            </div>
          </div>
          <div className="col-span-3">
            <Image src="/img/bag-1.png" width={375} height={487} alt="walao" />
          </div>
          <div className="col-span-4 flex flex-col justify-center">
            <p className="text-secondBlue text-[28px] font-bold">
              Playwood arm chair
            </p>
            <div className="flex gap-x-1 items-center mb-[10px]">
              {stars.map((data, idx) => (
                <Image
                  key={idx}
                  width={12}
                  height={12}
                  src="/img/star.png"
                  alt="walao"
                />
              ))}
              <p className="text-secondBlue">(22)</p>
            </div>
            <div className="flex items-center gap-x-4">
              <p className="text-secondBlue text-sm">$32.00</p>
              <p className="text-pink text-sm">
                <s>$48.00</s>
              </p>
            </div>
            <p className="text-base text-twelfthGray my-[10px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              tellus porttitor purus, et volutpat sit.
            </p>
            <div className="flex gap-x-4 items-center">
              <button className="rounded-[2px] px-5 py-2 bg-pink text-white w-fit">
                Add To Cart
              </button>
              <a className="cursor-pointer">
                <AiOutlineHeart width={60} height={60} />
              </a>
            </div>
            <p className="text-secondBlue font-bold my-[15px]">Categories:</p>
            <p className="text-secondBlue font-bold">Tags:</p>
          </div>
        </div>
      </div>
    </div>
  );
};
