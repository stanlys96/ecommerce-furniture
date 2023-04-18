import { LatestBlog } from "./LatestBlog";
import useSWR from "swr";
import { fetcher } from "@/utils/axios";

export const LatestBlogSection = () => {
  const { data } = useSWR("/furniture/blog/getAllBlogs", fetcher);
  return (
    <div className="mt-[50px]">
      <p className="text-darkBlue font-bold text-center text-[42px] mb-[30px]">
        Latest Blog
      </p>
      <div className="grid grid-cols-3 gap-x-8 mx-auto container px-[150px]">
        {data?.data?.map((blog: any, idx: any) => (
          <LatestBlog
            id={blog.id}
            imgUrl={blog.img_url}
            author={blog.author}
            date={blog.date_posted.slice(0, 10)}
            title={blog.title}
            description={blog.description1}
          />
        ))}
      </div>
    </div>
  );
};
