import Image from "next/image";

export const FeaturedProduct = () => {
  return (
    <div className="shadow-lg-custom">
      <div className="bg-gray p-5 relative flex justify-center items-center">
        <Image width={178} height={178} src="/img/chair-1.png" alt="walao" />
      </div>
      <div className="flex flex-col justify-center items-center pb-3">
        <p className="text-pink font-bold my-3">Cantilever chair</p>
        <div className="flex gap-x-2">
          <div className="h-[4px] w-[14px] rounded-[10px] bg-green"></div>
          <div className="h-[4px] w-[14px] rounded-[10px] bg-secondPink"></div>
          <div className="h-[4px] w-[14px] rounded-[10px] bg-primary"></div>
        </div>
        <p className="text-secondBlue my-3">Code - Y523201</p>
        <p className="text-secondBlue">$42.00</p>
      </div>
    </div>
  );
};
