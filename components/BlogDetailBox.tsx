import Image from "next/image";

export const BlogDetailBox = () => {
  const stars = [1, 2, 3, 4, 5];
  const detailsData = [1, 2, 3, 4];
  return (
    <div>
      <Image
        src="/img/blog-detail-2.png"
        width={210}
        height={254}
        alt="walao"
      />
      <p className="text-secondBlue text-base text-center my-1 font-bold">
        A etiam
      </p>
      <div className="flex gap-x-2 items-center">
        <p className="text-secondBlue text-[12px]">$32.00</p>
        <p className="text-pink text-[12px]">
          <s>$56.00</s>
        </p>
        <div className="flex gap-x-1 items-center">
          {stars.map((data, idx) => (
            <Image
              key={idx}
              width={12}
              height={12}
              src="/img/star.png"
              alt="walao"
            />
          ))}
        </div>
      </div>
    </div>
  );
};
