import Image from "next/image";

export const TrendingProduct = () => {
  return (
    <div className="px-2 pt-2 pb-8 shadow-lg-custom">
      <div className="bg-fifthGray p-5">
        <Image width={171} height={171} alt="walao" src="/img/chair-6.png" />
      </div>
      <div className="text-center">
        <p className="my-2 text-secondBlue font-bold">Cantilever chair</p>
        <div className="flex gap-x-2 justify-center items-center">
          <p className="text-sm text-secondBlue">$26.00</p>
          <p className="text-sm text-secondBlue30">
            <s>$42.00</s>
          </p>
        </div>
      </div>
    </div>
  );
};
