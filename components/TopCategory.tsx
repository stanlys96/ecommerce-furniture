import Image from "next/image";

export const TopCategory = () => {
  return (
    <div>
      <div className="rounded-full bg-gray p-8 flex items-center justify-center">
        <Image src="/img/chair-1.png" width={158} height={158} alt="walao" />
      </div>
      <p className="text-secondBlue text-lg text-center my-2">Mini LCW Chair</p>
      <p className="text-secondBlue text-lg text-center">$56.00</p>
    </div>
  );
};
