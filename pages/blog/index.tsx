import { Jumbotron } from "@/src/components/Jumbotron";
import { BlogBox } from "@/src/components/BlogBox";
import { BlogSidebar } from "@/src/components/BlogSidebar";
import { useRef, useState } from "react";
import { BlogDetail } from "@/src/components/BlogDetail";
import { Sponsors } from "@/src/components/Sponsors";
import useSWR from "swr";
import { fetcher } from "@/utils/axios";

export default function Blog() {
  const scrollToTop = useRef<HTMLInputElement>(null);
  const { data } = useSWR("/blog/getAllBlogs", fetcher);
  const [blogState, setBlogState] = useState({
    detail: false,
    id: "",
    data: {},
  });
  return (
    <div className="pb-[100px]">
      <Jumbotron title="Blog Page" subTitle="Blog Page" />
      <div className="container mx-auto px-[150px] grid grid-cols-3 gap-x-8 py-[100px]">
        <div ref={scrollToTop} className="col-span-2">
          {!blogState.detail ? (
            data?.data.map((blogData: any, idx: any) => (
              <BlogBox
                completeData={blogData}
                imgUrl={blogData.img_url}
                author={blogData.author}
                date={blogData.date_posted.slice(0, 10)}
                title={blogData.title}
                description={blogData.description1}
                setBlogState={setBlogState}
                key={idx}
                index={idx}
                scrollToTop={scrollToTop}
              />
            ))
          ) : (
            <BlogDetail data={blogState.data} />
          )}
        </div>
        <BlogSidebar />
      </div>
      <Sponsors />
    </div>
  );
}
