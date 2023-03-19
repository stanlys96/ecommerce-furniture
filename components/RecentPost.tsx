import Image from "next/image";

export const RecentPost = () => {
  return (
    <div>
      <p className="text-secondBlue text-[20px] my-[20px]">Recent Post</p>
      <div className="flex flex-col gap-y-4">
        <div className="flex gap-x-2 items-center">
          <Image width={71} height={51} src="/img/blog-img-1.png" alt="walao" />
          <div className="flex flex-col justify-center">
            <p className="text-ellipsis text-sm text-secondBlue">
              It is a long established fact
            </p>
            <p className="text-xs text-subText">Aug 09 2020</p>
          </div>
        </div>
        <div className="flex gap-x-2 items-center">
          <Image width={71} height={51} src="/img/blog-img-1.png" alt="walao" />
          <div className="flex flex-col justify-center">
            <p className="text-ellipsis text-sm text-secondBlue">
              It is a long established fact
            </p>
            <p className="text-xs text-subText">Aug 09 2020</p>
          </div>
        </div>
        <div className="flex gap-x-2 items-center">
          <Image width={71} height={51} src="/img/blog-img-1.png" alt="walao" />
          <div className="flex flex-col justify-center">
            <p className="text-ellipsis text-sm text-secondBlue">
              It is a long established fact
            </p>
            <p className="text-xs text-subText">Aug 09 2020</p>
          </div>
        </div>
      </div>
    </div>
  );
};
