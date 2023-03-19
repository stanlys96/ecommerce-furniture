import Image from "next/image";

type Props = {
  index: number;
  setBlogState: (param1: any) => void;
};

export const BlogBox = ({ index, setBlogState }: Props) => {
  return (
    <div className={`${index !== 0 && "mt-[50px]"}`}>
      <Image src="/img/blog-1.png" width={870} height={453} alt="walao" />
      <div className="my-6 flex gap-x-4">
        <div className="flex gap-x-2">
          <Image src="/img/ic-pen.png" width={12} height={12} alt="walao" />
          <div className="rounded-[2px] bg-fourthPink px-[35px] py-[2px]">
            <p className="text-secondBlue">Surf Auxion</p>
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
            <p className="text-secondBlue">Aug 09 2020</p>
          </div>
        </div>
      </div>
      <p className="text-secondBlue text-[24px] font-bold">
        Mauris at orci non vulputate diam tincidunt nec.
      </p>
      <p className="text-subText text-base text-ellipsis my-5">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis
        quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae
        ultrices in in neque, porta dignissim. Adipiscing purus, cursus
        vulputate id id dictum at.
      </p>
      <div className="flex gap-x-1 items-center">
        <a
          onClick={() => setBlogState({ detail: true, id: index })}
          className="text-[18px] text-secondBlue font-bold cursor-pointer"
        >
          Read More
        </a>
        <div className="w-2 h-2 rounded-full bg-pink"></div>
      </div>
    </div>
  );
};
