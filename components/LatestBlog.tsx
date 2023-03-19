import Image from "next/image";

export const LatestBlog = () => {
  return (
    <div className="shadow-lg-custom mb-[100px] rounded-[10px]">
      <div>
        <Image
          src="/img/blog-img-1.png"
          className="rounded-[10px]"
          height={255}
          width={370}
          alt="walao"
        />
      </div>
      <div className="p-4">
        <div className="flex gap-x-4">
          <div className="flex gap-x-2">
            <Image src="/img/ic-pen.png" width={12} height={12} alt="walao" />
            <p className="text-secondBlue text-sm">SaberAli</p>
          </div>
          <div className="flex gap-x-2">
            <Image
              src="/img/ic-calendar.png"
              width={12}
              height={12}
              alt="walao"
            />
            <p className="text-secondBlue text-sm">21 August, 2020</p>
          </div>
        </div>
        <p className="text-secondBlue font-bold my-3">
          Top Essential Trends in 2021
        </p>
        <p className="text-seventhGray text-base">
          More off this less hello samlande lied much over tightly circa horse
          taped mightly
        </p>
        <p className="text-secondBlue text-base border-b border-secondBlue inline-block mt-3">
          Read More
        </p>
      </div>
    </div>
  );
};
