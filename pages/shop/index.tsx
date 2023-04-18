import { GridProduct } from "@/src/components/GridProduct";
import { Jumbotron } from "@/src/components/Jumbotron";
import { ListProduct } from "@/src/components/ListProduct";
import { ShopHeader } from "@/src/components/ShopHeader";
import { Sponsors } from "@/src/components/Sponsors";
import { fetcher } from "@/utils/axios";
import { useState } from "react";
import useSWR from "swr";

export default function Shop() {
  const shopListData = [1, 2, 3, 4, 5, 6, 7];
  const [productView, setProductView] = useState("grid");
  const { data } = useSWR("/furniture/products/getAllProducts", fetcher);
  console.log(data, "WALAO!");
  const shopData = !data ? [] : data?.data ?? [];
  return (
    <div className="pb-[100px]">
      <Jumbotron title="Shop Grid Default" subTitle="Shop Grid Default" />
      <div className="container mx-auto px-[150px]">
        <div className="py-[100px]">
          <ShopHeader setProductView={setProductView} />
          {productView === "grid" ? (
            <div className="grid grid-cols-4 gap-8 mt-[80px]">
              {shopData.slice(0, 16).map((data: any, idx: any) => (
                <GridProduct
                  id={data.id}
                  title={data.name}
                  price={parseInt(data.price)}
                  image_url={data.img_url}
                  key={idx}
                />
              ))}
            </div>
          ) : (
            <div className="flex flex-col gap-y-10 mt-[100px]">
              {shopListData.map((data, idx) => (
                <ListProduct key={idx} />
              ))}
            </div>
          )}
        </div>
        <Sponsors />
      </div>
    </div>
  );
}
