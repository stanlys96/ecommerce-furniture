import Image from "next/image";
import { BlogDetailBox } from "./BlogDetailBox";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";
import { BlogComment } from "./BlogComment";

type Props = {
  data: any;
};

export const BlogDetail = ({ data }: Props) => {
  return (
    <div>
      <Image src={data.img_url} width={870} height={453} alt="walao" />
      <div className="my-6 flex gap-x-4">
        <div className="flex gap-x-2">
          <Image src="/img/ic-pen.png" width={12} height={12} alt="walao" />
          <div className="rounded-[2px] bg-fourthPink px-[35px] py-[2px]">
            <p className="text-secondBlue">{data.author}</p>
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
            <p className="text-secondBlue">{data.date_posted.slice(0, 10)}</p>
          </div>
        </div>
      </div>
      <p className="text-secondBlue text-[24px] font-bold">{data.title}</p>
      <p className="text-subText text-base text-ellipsis my-5">
        {data.description1}
      </p>
      <p className="text-subText text-base text-ellipsis my-5">
        {data.description2}
      </p>
      <div className="bg-seventeenthGray p-4 border-l-2 border-pink">
        <p className="text-subText text-base text-ellipsis">
          &quot;<i>{data.description3}</i>&quot;
        </p>
      </div>
      <div className="py-8 flex gap-x-4">
        {data.additional_images.map((imgData: any, idx: any) => (
          <Image key={idx} src={imgData} width={418} height={245} alt="walao" />
        ))}
      </div>
      <p className="text-subText text-base text-ellipsis">
        {data.description4}
      </p>
      <div className="my-5 grid grid-cols-4 gap-x-4">
        {data.products_on_sale.map((productData: any, idx: any) => (
          <BlogDetailBox
            key={idx}
            imgUrl={productData.img_url}
            title={productData.title}
            price={productData.price}
            stars={Number(productData.stars)}
          />
        ))}
      </div>
      <p className="text-subText text-base text-ellipsis">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis
        quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae
        ultrices in in neque, porta dignissim. Adipiscing purus, cursus
        vulputate id id dictum at.
      </p>
      <p className="text-subText text-base text-ellipsis my-5">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis
        quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae
        ultrices in in neque, porta dignissim. Adipiscing purus, cursus
        vulputate id id dictum at.
      </p>
      <hr className="border border-secondGray" />
      <div className="flex justify-center items-center gap-x-3 my-8">
        <Image
          src="/img/facebook.png"
          width={25}
          height={25}
          alt="Facebook Icon"
        />
        <Image
          src="/img/instagram.png"
          width={25}
          height={25}
          alt="Instagram Icon"
        />
        <Image
          src="/img/twitter.png"
          width={25}
          height={25}
          alt="Twitter Icon"
        />
      </div>
      <div className="bg-eighteenthGray p-4 flex justify-between items-center mb-10">
        <div className="flex gap-x-2 items-center">
          <AiOutlineArrowLeft className="text-subText" />
          <p className="text-subText text-sm">Previous Post</p>
        </div>
        <div className="flex gap-x-2 items-center">
          <p className="text-subText text-sm">Next Post</p>
          <AiOutlineArrowRight className="text-subText" />
        </div>
      </div>
      <div className="flex flex-col gap-y-8">
        <BlogComment />
        <BlogComment />
      </div>
      <div className="mt-[25px]">
        <div className="flex gap-x-4">
          <input
            placeholder="Your Name*"
            className="border border-eigthGray w-full rounded-[2px] py-2 px-3 focus:outline-pink my-[10px]"
          />
          <input
            placeholder="Your Email*"
            className="border border-eigthGray w-full rounded-[2px] py-2 px-3 focus:outline-pink my-[10px]"
          />
        </div>
      </div>
      <textarea
        placeholder="Type Your Message*"
        className="border border-eigthGray w-full rounded-[2px] p-3 focus:outline-pink h-48"
      />
      <div className="flex gap-x-1">
        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
        <p className="text-twelfthGray text-xs">
          Save my name, email, and website in this browser for the next time I
          comment.
        </p>
      </div>
      <button className="rounded-[2px] px-5 py-2 bg-pink text-white mt-[20px] w-full">
        Submit
      </button>
    </div>
  );
};
