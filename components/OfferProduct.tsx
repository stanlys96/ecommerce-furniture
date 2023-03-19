import Image from "next/image";

export const OfferProduct = () => {
  return (
    <div>
      <p className="text-secondBlue text-[20px] my-[20px]">Offer Product</p>
      <div className="flex flex-col gap-y-4">
        <div className="flex gap-x-4">
          <div>
            <Image
              src="/img/blog-img-1.png"
              width={126}
              height={80}
              alt="walao"
            />
            <p className="my-1 text-darkBlue text-center">Duis lectus est.</p>
            <p className="text-xs text-subText text-center">$20.00</p>
          </div>
          <div>
            <Image
              src="/img/blog-img-1.png"
              width={126}
              height={80}
              alt="walao"
            />
            <p className="my-1 text-darkBlue text-center">Duis lectus est.</p>
            <p className="text-xs text-subText text-center">$20.00</p>
          </div>
        </div>
        <div className="flex gap-x-4">
          <div>
            <Image
              src="/img/blog-img-1.png"
              width={126}
              height={80}
              alt="walao"
            />
            <p className="my-1 text-darkBlue text-center">Duis lectus est.</p>
            <p className="text-xs text-subText text-center">$20.00</p>
          </div>
          <div>
            <Image
              src="/img/blog-img-1.png"
              width={126}
              height={80}
              alt="walao"
            />
            <p className="my-1 text-darkBlue text-center">Duis lectus est.</p>
            <p className="text-xs text-subText text-center">$20.00</p>
          </div>
        </div>
      </div>
    </div>
  );
};
