import Image from "next/image";

export const AboutHeader = () => {
  return (
    <div className="grid grid-cols-2 gap-x-4">
      <div className="relative">
        <Image src="/img/about_us.png" width={570} height={409} alt="walao" />
      </div>
      <div className="flex flex-col justify-center">
        <p className="text-secondBlue text-[24px] font-bold">
          Know About Our Ecommerce Business, History
        </p>
        <p className="my-[20px] text-base text-subText">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque
          ultrices mattis aliquam, malesuada diam est. Malesuada sem tristique
          amet erat vitae eget dolor lobortis. Accumsan faucibus vitae lobortis
          quis bibendum quam.
        </p>
        <button className="rounded-[2px] px-5 py-2 bg-pink text-white w-fit">
          Contact Us
        </button>
      </div>
    </div>
  );
};
