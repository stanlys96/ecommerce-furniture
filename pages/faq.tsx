import { AskAQuestion } from "@/src/components/AskAQuestion";
import { GeneralInformation } from "@/src/components/GeneralInformation";
import { Jumbotron } from "@/src/components/Jumbotron";
import { Sponsors } from "@/src/components/Sponsors";

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
