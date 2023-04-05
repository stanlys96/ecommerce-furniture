import { AboutHeader } from "@/src/components/AboutHeader";
import { Jumbotron } from "@/src/components/Jumbotron";
import { ShopexOffer } from "@/src/components/ShopexOffer";
import Image from "next/image";

export default function About() {
  return (
    <div>
      <Jumbotron title="About Us" subTitle="About Us" />
      <div className="py-[100px]">
        <div className="container mx-auto px-[150px]">
          <AboutHeader />
          <div className="mt-[50px]">
            <p className="text-darkBlue font-bold text-center text-[42px] mb-[20px]">
              Our Features
            </p>
            <div className="grid grid-cols-4 gap-x-8">
              <ShopexOffer />
              <ShopexOffer />
              <ShopexOffer />
              <ShopexOffer />
            </div>
          </div>
        </div>
      </div>
      <div className="py-[50px] bg-eleventhGray">
        <div className="container mx-auto px-[150px] flex flex-col items-center">
          <p className="text-[36px] font-bold mb-[25px]">
            What Our Clients Say!
          </p>
          <div className="flex gap-x-3">
            <Image width={55} height={55} src="/img/blog-1.png" alt="walao" />
            <Image width={55} height={55} src="/img/blog-1.png" alt="walao" />
            <Image width={55} height={55} src="/img/blog-1.png" alt="walao" />
          </div>
          <div className="my-4">
            <p className="text-center text-[18px] font-bold text-secondBlue">
              Selena Gomez
            </p>
            <p className="text-center text-[10px] text-subText font-bold">
              CEO at Webecy Digital
            </p>
          </div>
          <p className="text-subText font-bold text-base text-center px-[100px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non duis
            ultrices quam vel dui sollicitudin aliquet id arcu. Nam vitae a enim
            nunc, sed sapien egestas ac nam. Tristique ultrices dolor aliquam
            lacus volutpat praesent.
          </p>
        </div>
      </div>
    </div>
  );
}
