import Image from "next/image";

export const GridProduct = () => {
  return (
    <div className="flex flex-col justify-center">
      <div className="flex justify-center items-center bg-gray p-8 mb-[10px]">
        <Image src="/img/chair-1.png" width={167} height={167} alt="walao" />
      </div>
      <p className="text-secondBlue text-base font-bold text-center">
        Vel elit euismod
      </p>
      <div className="flex items-center gap-x-2 justify-center my-[10px]">
        <div className="w-[10px] h-[10px] rounded-full bg-thirdOrange"></div>
        <div className="w-[10px] h-[10px] rounded-full bg-sixthPink"></div>
        <div className="w-[10px] h-[10px] rounded-full bg-thirdPurple"></div>
      </div>
      <div className="flex gap-x-2 justify-center">
        <p className="text-secondBlue text-sm">$26.00</p>
        <p className="text-pink text-sm">
          <s>$42.00</s>
        </p>
      </div>
    </div>
  );
};
