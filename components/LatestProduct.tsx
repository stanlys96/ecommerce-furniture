import Image from "next/image";

export const LatestProduct = () => {
  return (
    <div className="mt-[50px]">
      <div className="bg-darkGray p-8">
        <Image width={222} height={222} src="/img/chair-5.png" alt="walao" />
      </div>
      <div className="flex justify-between items-center mt-3">
        <p className="text-secondBlue text-base border-b-2 border-secondGray">
          Comfort Handy Craft
        </p>
        <div className="flex gap-x-1">
          <p className="text-secondBlue text-xs">$42.00</p>
          <p className="text-pink text-xs">
            <s>$65.00</s>
          </p>
        </div>
      </div>
    </div>
  );
};
