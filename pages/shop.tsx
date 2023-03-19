import { GridProduct } from "@/components/GridProduct";
import { Jumbotron } from "@/components/Jumbotron";
import { ListProduct } from "@/components/ListProduct";
import { ShopHeader } from "@/components/ShopHeader";
import { Sponsors } from "@/components/Sponsors";
import { useState } from "react";

export default function Shop() {
  const shopData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const shopListData = [1, 2, 3, 4, 5, 6, 7];
  const [productView, setProductView] = useState("grid");
  return (
    <div className="pb-[100px]">
      <Jumbotron title="Shop Grid Default" subTitle="Shop Grid Default" />
      <div className="container mx-auto px-[150px]">
        <div className="py-[100px]">
          <ShopHeader setProductView={setProductView} />
          {productView === "grid" ? (
            <div className="grid grid-cols-4 gap-8 mt-[80px]">
              {shopData.map((data, idx) => (
                <GridProduct key={idx} />
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
