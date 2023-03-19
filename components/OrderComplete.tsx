import Image from "next/image";

export const OrderComplete = () => {
  return (
    <div className="px-[150px] py-[100px] flex flex-col gap-y-8 justify-center items-center relative">
      <Image
        className="absolute top-[75px] left-[250px]"
        width={60}
        height={60}
        src="/img/clock.png"
        alt="walao"
      />
      <Image
        className="absolute bottom-[75px] right-[250px]"
        width={60}
        height={60}
        src="/img/checklist.png"
        alt="walao"
      />
      <Image src="/img/check.png" width={46} height={37} alt="walao" />
      <p className="text-secondBlue text-[28px] font-bold">
        Your Order Is Completed!
      </p>
      <p className="text-twelfthGray text-base text-center px-[100px]">
        Thank you for your order! Your order is being processed and will be
        completed within 3-6 hours. You will receive an email confirmation when
        your order is completed.
      </p>
      <button className="rounded-[2px] px-5 py-2 bg-pink text-white">
        Continue Shopping
      </button>
    </div>
  );
};
