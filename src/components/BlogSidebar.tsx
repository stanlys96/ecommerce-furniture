import { Categories } from "./Categories";
import { Follow } from "./Follow";
import { OfferProduct } from "./OfferProduct";
import { RecentPost } from "./RecentPost";
import { SaleProduct } from "./SaleProduct";
import { Tags } from "./Tags";

export const BlogSidebar = () => {
  return (
    <div>
      <p className="text-secondBlue text-[20px]">Search</p>
      <input
        placeholder="Search For Posts"
        className="border border-eigthGray w-full rounded-[2px] py-2 px-3 focus:outline-pink my-[10px]"
      />
      <Categories />
      <RecentPost />
      <SaleProduct />
      <OfferProduct />
      <Follow />
      <Tags />
    </div>
  );
};
