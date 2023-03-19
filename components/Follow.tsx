import Image from "next/image";

export const Follow = () => {
  return (
    <div>
      <p className="text-secondBlue text-[20px] my-[20px]">Follow</p>
      <div className="p-3 flex gap-x-4 shadow-md w-fit">
        <Image src="/img/facebook.png" width={25} height={25} alt="walao" />
        <Image src="/img/instagram.png" width={25} height={25} alt="walao" />
        <Image src="/img/twitter.png" width={25} height={25} alt="walao" />
      </div>
    </div>
  );
};
