import { ContactWays } from "@/components/ContactWays";
import { InformationAboutUs } from "@/components/InformationAboutUs";
import { Jumbotron } from "@/components/Jumbotron";
import Image from "next/image";

export default function Contact() {
  return (
    <div>
      <Jumbotron title="Contact Us" subTitle="Contact Us" />
      <div className="container mx-auto px-[150px]">
        <div className="grid grid-cols-2 gap-x-[40px] py-[100px]">
          <InformationAboutUs />
          <ContactWays />
        </div>
        <div className="grid grid-cols-2 mb-[100px]">
          <div>
            <p className="text-secondBlue text-[24px] font-bold">
              Get In Touch
            </p>
            <p className="text-subText text-base py-[20px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
              neque ultrices tristique amet erat vitae eget dolor los vitae
              lobortis quis bibendum quam.
            </p>
            <div className="grid grid-cols-2 gap-x-2">
              <input
                placeholder="Your Name*"
                className="border border-eigthGray w-full rounded-[2px] p-3 focus:outline-pink mb-[10px]"
              />
              <input
                placeholder="Your E-mail*"
                className="border border-eigthGray w-full rounded-[2px] p-3 focus:outline-pink mb-[10px]"
              />
            </div>
            <input
              placeholder="Subject*"
              className="border border-eigthGray w-full rounded-[2px] p-3 focus:outline-pink mb-[10px]"
            />
            <textarea
              placeholder="Type Your Message*"
              className="border border-eigthGray w-full rounded-[2px] p-3 focus:outline-pink mb-[10px] h-48"
            />
            <button className="rounded-[2px] px-5 py-2 bg-pink text-white mb-[20px]">
              Send Mail
            </button>
          </div>
          <div className="relative">
            <Image fill src="/img/get_in_touch.png" alt="walao" />
          </div>
        </div>
      </div>
    </div>
  );
}
