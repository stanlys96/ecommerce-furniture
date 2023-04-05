import Image from "next/image";
export const Footer = () => {
  return (
    <footer>
      <div className="bg-secondGray h-[50vh] pt-[50px]">
        <div className="container mx-auto px-[150px] grid grid-cols-5 gap-x-8">
          <div className="col-span-2">
            <p className="text-black text-[38px] font-bold">Hekto</p>
            <button className="rounded-[2px] px-5 py-2 bg-pink text-white my-[20px]">
              Sign Up
            </button>
            <p className="text-lightGray my-[10px]">Contact Info</p>
            <p className="text-lightGray">
              17 Princess Road, London, Greater London NW1 8JR, UK
            </p>
          </div>
          <div className="flex flex-col">
            <p className="text-black text-[22px] mb-[10px]">Categories</p>
            <a className="text-base text-lightGray my-3" href="#">
              Laptops
            </a>
            <a className="text-base text-lightGray my-3" href="#">
              Cameras
            </a>
            <a className="text-base text-lightGray my-3" href="#">
              Smart Phones
            </a>
            <a className="text-base text-lightGray my-3" href="#">
              Video Games
            </a>
            <a className="text-base text-lightGray my-3" href="#">
              Waterproof Headphones
            </a>
          </div>
          <div className="flex flex-col">
            <p className="text-black text-[22px] mb-[10px]">Customer Care</p>
            <a className="text-base text-lightGray my-3" href="#">
              My Account
            </a>
            <a className="text-base text-lightGray my-3" href="#">
              Discount
            </a>
            <a className="text-base text-lightGray my-3" href="#">
              Returns
            </a>
            <a className="text-base text-lightGray my-3" href="#">
              Orders History
            </a>
            <a className="text-base text-lightGray my-3" href="#">
              Order Tracking
            </a>
          </div>
          <div className="flex flex-col">
            <p className="text-black text-[22px] mb-[10px]">Pages</p>
            <a className="text-base text-lightGray my-3" href="#">
              Blog
            </a>
            <a className="text-base text-lightGray my-3" href="#">
              Browse the Shop
            </a>
            <a className="text-base text-lightGray my-3" href="#">
              Category
            </a>
            <a className="text-base text-lightGray my-3" href="#">
              Pre-Built Pages
            </a>
            <a className="text-base text-lightGray my-3" href="#">
              Visual Composer Elements
            </a>
          </div>
        </div>
      </div>
      <div className="bg-thirdPink">
        <div className="container mx-auto p-4 px-[200px] text-lightGray flex justify-between">
          <p>&copy;Webecy - All Rights Reserved</p>
          <div className="flex gap-x-2 items-center">
            <Image
              width={15}
              height={15}
              src="/img/twitter-ic.png"
              alt="walao"
            />
            <Image
              width={15}
              height={15}
              src="/img/twitter-ic.png"
              alt="walao"
            />
            <Image
              width={15}
              height={15}
              src="/img/twitter-ic.png"
              alt="walao"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};
