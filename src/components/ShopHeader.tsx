import Image from "next/image";

type Props = {
  setProductView: (param1: any) => void;
};

export const ShopHeader = ({ setProductView }: Props) => {
  return (
    <div className="grid grid-cols-2 items-center">
      <div>
        <p className="text-secondBlue text-[18px] font-bold">
          Ecommerce Accesories & Fashion Item
        </p>
      </div>
      <div className="flex gap-x-3">
        <div className="flex gap-x-2 items-center">
          <p className="text-secondBlue text-base">Sort By:</p>
          <input
            placeholder="Your Name*"
            className="border border-eigthGray rounded-[2px] py-[4px] px-[10px] focus:outline-pink "
          />
        </div>
        <div className="flex flex-row items-center gap-x-1">
          <p className="inline-block">View:</p>
          <a className="cursor-pointer" onClick={() => setProductView("grid")}>
            <Image width={12} height={12} src="/img/ic-grid.png" alt="walao" />
          </a>
          <a className="cursor-pointer" onClick={() => setProductView("list")}>
            <Image width={12} height={12} src="/img/ic-list.png" alt="walao" />
          </a>
        </div>
      </div>
    </div>
  );
};
