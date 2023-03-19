import Image from "next/image";

export const ExecutiveProduct = () => {
  return (
    <div className="flex gap-x-2">
      <div className="p-5 bg-fifthGray">
        <Image src="/img/executive-1.png" height={74} width={107} alt="walao" />
      </div>
      <div className="flex flex-col justify-center gap-y-2">
        <p className="text-secondBlue text-base">Executive Seat Chair</p>
        <p className="text-secondBlue text-xs">$32.00</p>
      </div>
    </div>
  );
};
