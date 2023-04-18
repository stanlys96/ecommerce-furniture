import { Jumbotron } from "@/src/components/Jumbotron";
import { BlogBox } from "@/src/components/BlogBox";
import { BlogSidebar } from "@/src/components/BlogSidebar";
import { useRef, useState } from "react";
import { BlogDetail } from "@/src/components/BlogDetail";
import { Sponsors } from "@/src/components/Sponsors";
import useSWR from "swr";
import { fetcher } from "@/utils/axios";
import { useRouter } from "next/router";

export default function BlogDetails() {
  const router = useRouter();
  const scrollToTop = useRef<HTMLInputElement>(null);
  const { data } = useSWR(
    `/furniture/blog/getBlog/${router.query.id}`,
    fetcher
  );
  return (
    <div className="pb-[100px]">
      <Jumbotron title="Blog Page" subTitle="Blog Page" />
      <div className="container mx-auto px-[150px] grid grid-cols-3 gap-x-8 py-[100px]">
        <div ref={scrollToTop} className="col-span-2">
          <a
            className="cursor-pointer mb-5 inline-block"
            onClick={() => router.back()}
          >
            Back
          </a>
          {!data ? (
            <p>Loading...</p>
          ) : (
            <BlogDetail data={data?.data?.data[0]} />
          )}
        </div>
        <BlogSidebar />
      </div>
      <Sponsors />
    </div>
  );
}
