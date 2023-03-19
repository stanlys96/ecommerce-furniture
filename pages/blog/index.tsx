import { Jumbotron } from "@/components/Jumbotron";
import { BlogBox } from "@/components/BlogBox";
import { BlogSidebar } from "@/components/BlogSidebar";
import { useState } from "react";
import { BlogDetail } from "@/components/BlogDetail";
import { Sponsors } from "@/components/Sponsors";

export default function Blog() {
  const blogData = [1, 2, 3];
  const [blogState, setBlogState] = useState({
    detail: false,
    id: "",
  });
  return (
    <div className="pb-[100px]">
      <Jumbotron title="Blog Page" subTitle="Blog Page" />
      <div className="container mx-auto px-[150px] grid grid-cols-3 gap-x-8 py-[100px]">
        <div className="col-span-2">
          {!blogState.detail ? (
            blogData.map((data, idx) => (
              <BlogBox setBlogState={setBlogState} key={idx} index={idx} />
            ))
          ) : (
            <BlogDetail />
          )}
        </div>
        <BlogSidebar />
      </div>
      <Sponsors />
    </div>
  );
}
