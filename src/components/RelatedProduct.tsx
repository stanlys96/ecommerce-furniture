import Image from "next/image";

export const RelatedProduct = () => {
  const stars = [1, 2, 3, 4, 5];
  return (
    <div>
      <div>
        <Image
          src="/img/related-product-1.png"
          width={270}
          height={340}
          alt="walao"
        />
      </div>
      <div className="flex items-center justify-between my-2">
        <p className="text-secondBlue text-base">Women&apos;s Fashion</p>
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
      <p className="text-secondBlue text-sm">$51.00</p>
    </div>
  );
};
