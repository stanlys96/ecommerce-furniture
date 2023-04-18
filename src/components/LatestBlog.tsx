import Image from "next/image";
import { useRouter } from "next/router";

type Props = {
  id: string;
  imgUrl: string;
  author: string;
  date: string;
  title: string;
  description: string;
};

export const LatestBlog = ({
  id,
  imgUrl,
  author,
  date,
  title,
  description,
}: Props) => {
  const router = useRouter();
  return (
    <div className="shadow-lg-custom mb-[100px] rounded-[10px]">
      <div>
        <Image
          src={imgUrl}
          className="rounded-[10px]"
          height={255}
          width={370}
          alt="walao"
        />
      </div>
      <div className="p-4">
        <div className="flex gap-x-4">
          <div className="flex gap-x-2 items-center">
            <Image src="/img/ic-pen.png" width={12} height={12} alt="walao" />
            <p className="text-secondBlue text-sm">{author}</p>
          </div>
          <div className="flex gap-x-2 items-center">
            <Image
              src="/img/ic-calendar.png"
              width={12}
              height={12}
              alt="walao"
            />
            <p className="text-secondBlue text-sm">{date}</p>
          </div>
        </div>
        <p className="text-secondBlue font-bold my-3">{title}</p>
        <p className="text-seventhGray text-base">{description}</p>
        <a
          onClick={() => router.push(`/blog/${id}`)}
          className="text-secondBlue text-base border-b border-secondBlue inline-block mt-3 cursor-pointer"
        >
          Read More
        </a>
      </div>
    </div>
  );
};
