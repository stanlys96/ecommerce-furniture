import { Jumbotron } from "@/components/Jumbotron";
import { OrderComplete } from "@/components/OrderComplete";
import { Sponsors } from "@/components/Sponsors";
import Image from "next/image";

export default function OrderCompleted() {
  return (
    <div className="pb-[100px]">
      <Jumbotron title="Order Completed" subTitle="Order Completed" />
      <div className="container mx-auto">
        <OrderComplete />
        <Sponsors />
      </div>
    </div>
  );
}
