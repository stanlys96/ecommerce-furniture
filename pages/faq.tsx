import { AskAQuestion } from "@/components/AskAQuestion";
import { GeneralInformation } from "@/components/GeneralInformation";
import { Jumbotron } from "@/components/Jumbotron";
import { Sponsors } from "@/components/Sponsors";

export default function FAQ() {
  return (
    <div className="pb-[100px]">
      <Jumbotron title="FAQ" subTitle="FAQ" />
      <div className="container mx-auto px-[150px]">
        <div className="py-[100px] grid grid-cols-2 gap-x-4">
          <GeneralInformation />
          <AskAQuestion />
        </div>
        <Sponsors />
      </div>
    </div>
  );
}
