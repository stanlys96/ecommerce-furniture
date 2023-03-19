import Image from "next/image";

export const BlogComment = () => {
  return (
    <div className="shadow-lg-custom p-6 flex gap-x-6">
      <Image src="/img/sapien.png" alt="walao" width={103} height={106} />
      <div className="flex flex-col justify-center">
        <div className="flex gap-x-2 items-center mb-[10px]">
          <p className="text-secondBlue text-sm font-bold">Sapien ac</p>
          <p className="text-nineteenthGray text-sm">Jan 09, 2020</p>
        </div>
        <p className="text-nineteenthGray text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. At in vitae
          rutrum vulputate consectetur.
        </p>
      </div>
    </div>
  );
};
