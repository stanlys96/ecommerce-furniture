import Image from "next/image";
import { ExecutiveProduct } from "./ExecutiveProduct";
import { FeaturedProduct } from "./FeaturedProduct";
import { LatestProduct } from "./LatestProduct";
import { ShopexOffer } from "./ShopexOffer";
import { TrendingProduct } from "./TrendingProduct";
import { AiOutlineCheck } from "react-icons/ai";
import { TopCategory } from "./TopCategory";
import { LatestBlog } from "./LatestBlog";
import { Sponsors } from "./Sponsors";
import { fetcher } from "@/utils/axios";
import useSWR from "swr";
import { FeaturedProducts } from "./FeaturedProducts";
import { LatestProducts } from "./LatestProducts";
import { TrendingProducts } from "./TrendingProducts";
import { TopCategories } from "./TopCategories";
import { LatestBlogSection } from "./LatestBlogSection";

export const HomePage = () => {
  const { data } = useSWR("/products/getAllProducts", fetcher);
  return (
    <div>
      <div className="home-bg relative flex justify-center items-center">
        <div className="container mx-auto px-[250px] pr-[500px]">
          <p className="text-pink font-bold text-base">
            Best Furniture For Your Castle...
          </p>
          <p className="text-[40px] font-bold my-[20px]">
            New Furniture Collection Trends in 2020
          </p>
          <p className="text-lightGray text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in
            est adipiscing in phasellus non in justo.
          </p>
          <button className="rounded-[2px] px-5 py-2 bg-pink text-white mt-[20px]">
            Shop Now
          </button>
        </div>
      </div>
      <div className="container mx-auto py-12 px-[150px]">
        <FeaturedProducts
          data={data?.data.filter(
            (product: any, idx: any) => product.sale_type === "featured"
          )}
        />
        <LatestProducts
          data={data?.data.filter(
            (product: any, idx: any) => product.sale_type === "latest"
          )}
        />
        <div className="mt-[50px]">
          <p className="text-darkBlue font-bold text-center text-[42px] mb-[20px]">
            What Shopex Offer!
          </p>
          <div className="grid grid-cols-4 gap-x-8">
            <ShopexOffer />
            <ShopexOffer />
            <ShopexOffer />
            <ShopexOffer />
          </div>
        </div>
      </div>
      <div className="unique-feature-bg">
        <div className="container mx-auto h-full">
          <div className="grid grid-cols-2 justify-center items-center h-[65vh]">
            <div></div>
            <div className="h-[65vh] flex flex-col justify-center gap-y-3">
              <p className="text-[35px] text-secondBlue font-bold">
                Unique Features of Latest & Trending Products
              </p>
              <div className="flex gap-x-2 items-center">
                <div className="rounded-full bg-pink w-[11px] h-[11px]"></div>
                <p className="text-base text-fourthGray">
                  All frames constructed with hardwood solids and laminates
                </p>
              </div>
              <div className="flex gap-x-2 items-center">
                <div className="rounded-full bg-thirdBlue w-[11px] h-[11px]"></div>
                <p className="text-base text-fourthGray">
                  Reinforced with double wood dowels, glue, screw - nails corner
                  blocks and machine nails
                </p>
              </div>
              <div className="flex gap-x-2 items-center">
                <div className="rounded-full bg-secondGreen w-[11px] h-[11px]"></div>
                <p className="text-base text-fourthGray">
                  Arms, backs and seats are structurally reinforced
                </p>
              </div>
              <div className="flex items-center gap-x-4 mt-[10px]">
                <button className="rounded-[2px] px-5 py-2 bg-pink text-white w-fit">
                  Add To Cart
                </button>
                <div>
                  <p className="text-secondBlue text-sm">B&B Italian Sofa</p>
                  <p className="text-secondBlue text-sm">$32.00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto py-12 px-[150px]">
        <TrendingProducts
          trendingData={data?.data.filter(
            (product: any, idx: any) => product.sale_type === "trending"
          )}
          executiveData={data?.data.filter(
            (product: any, idx: any) => product.sale_type === "executive"
          )}
        />
        <div className="mt-[50px]">
          <p className="text-darkBlue font-bold text-center text-[42px] mb-[20px]">
            Discount Item
          </p>
          <div className="flex justify-center items-center gap-x-10">
            <a className="text-secondBlue" href="#">
              Wood Chair
            </a>
            <a className="text-secondBlue" href="#">
              Plastic Chair
            </a>
            <a className="text-secondBlue" href="#">
              Sofa Collection
            </a>
          </div>
          <div className="grid grid-cols-2 gap-x-8">
            <div className="flex flex-col justify-center">
              <p className="text-secondBlue text-[35px]">
                20% Discount of All Products
              </p>
              <p className="text-pink text-[21px] my-3">Eams Sofa Compact</p>
              <p className="text-[17px] text-sixthGray mb-3">
                Lorem ipsum dolor sit amet consectetur adipiscing elit. Eu eget
                feugiat habitasse nec, bibendum condimentum.
              </p>
              <div className="grid grid-cols-2 justify-center items-center">
                <div className="flex flex-col gap-y-2">
                  <div className="flex gap-x-2 items-center">
                    <AiOutlineCheck />
                    <p className="text-sixthGray text-sm">
                      Material expose like metals
                    </p>
                  </div>
                  <div className="flex gap-x-2 items-center">
                    <AiOutlineCheck />
                    <p className="text-sixthGray text-sm">
                      Simple neutral colours
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-y-2">
                  <div className="flex gap-x-2 items-center">
                    <AiOutlineCheck />
                    <p className="text-sixthGray text-sm">
                      Clear lines and geomatric figures
                    </p>
                  </div>
                  <div className="flex gap-x-2 items-center">
                    <AiOutlineCheck />
                    <p className="text-sixthGray text-sm">
                      Material expose like metals
                    </p>
                  </div>
                </div>
              </div>
              <button className="rounded-[2px] px-5 py-2 bg-pink text-white mt-[20px] w-fit">
                Shop Now
              </button>
            </div>
            <div>
              <Image
                width={600}
                height={500}
                alt="walao"
                src="/img/discount-chair.png"
              />
            </div>
          </div>
        </div>
        <TopCategories
          data={data?.data.filter(
            (product: any, idx: any) => product.sale_type === "top"
          )}
        />
      </div>
      <div className="my-[50px] newsletter-bg flex justify-center items-center">
        <div className="mx-[400px] flex flex-col justify-center items-center h-full">
          <p className="text-secondBlue text-center text-[35px] font-bold">
            Get Latest Update By Subscribing To Our Newsletter
          </p>
          <button className="rounded-[2px] px-5 py-2 bg-pink text-white mt-[20px] mx-auto">
            Shop Now
          </button>
        </div>
      </div>
      <Sponsors />
      <LatestBlogSection />
    </div>
  );
};
