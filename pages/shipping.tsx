import { CartData } from "@/components/CartData";
import { ContactInformation } from "@/components/ContactInformation";
import { Jumbotron } from "@/components/Jumbotron";

export default function Shipping() {
  return (
    <div>
      <Jumbotron title="Shipping Information" subTitle="Shipping Information" />
      <div className="container mx-auto py-[100px] px-[150px]">
        <div className="grid grid-cols-5 gap-x-8">
          <ContactInformation />
          <CartData />
        </div>
      </div>
    </div>
  );
}
