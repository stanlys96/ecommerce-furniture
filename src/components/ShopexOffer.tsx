import Image from "next/image";

export const ShopexOffer = () => {
  return (
    <div className="flex flex-col justify-center items-center shadow-lg-custom p-5 text-center">
      <Image width={65} height={65} src="/img/offer-1.png" alt="walao" />
      <p className="text-secondBlue text-[22px] my-3">24/7 Support</p>
      <p className="text-thirdGray30 font-bold text-xs">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus
        gravida.
      </p>
    </div>
  );
};
