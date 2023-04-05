import Image from "next/image";

type Props = {
  index: number;
  setBlogState: (param1: any) => void;
  imgUrl: string;
  author: string;
  date: string;
  title: string;
  description: string;
  completeData: any;
  scrollToTop: any;
};

export const BlogBox = ({
  index,
  setBlogState,
  imgUrl,
  author,
  date,
  title,
  description,
  completeData,
  scrollToTop,
}: Props) => {
  return (
    <div className={`${index !== 0 && "mt-[50px]"}`}>
      <Image src={imgUrl} width={870} height={453} alt="walao" />
      <div className="my-6 flex gap-x-4">
        <div className="flex gap-x-2">
          <Image src="/img/ic-pen.png" width={12} height={12} alt="walao" />
          <div className="rounded-[2px] bg-fourthPink px-[35px] py-[2px]">
            <p className="text-secondBlue">{author}</p>
          </div>
        </div>
        <div className="flex gap-x-2">
          <Image
            src="/img/ic-calendar.png"
            width={12}
            height={12}
            alt="walao"
          />
          <div className="rounded-[2px] bg-orange px-[35px] py-[2px]">
            <p className="text-secondBlue">{date}</p>
          </div>
        </div>
      </div>
      <p className="text-secondBlue text-[24px] font-bold">{title}</p>
      <p className="text-subText text-base text-ellipsis my-5">{description}</p>
      <div className="flex gap-x-1 items-center">
        <a
          onClick={() => {
            setBlogState({ detail: true, id: index, data: completeData });
            scrollToTop.current?.scrollIntoView({
              behavior: "smooth",
              block: "start",
              inline: "nearest",
            });
          }}
          className="text-[18px] text-secondBlue font-bold cursor-pointer"
        >
          Read More
        </a>
        <div className="w-2 h-2 rounded-full bg-pink"></div>
      </div>
    </div>
  );
};
