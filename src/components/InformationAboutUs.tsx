export const InformationAboutUs = () => {
  return (
    <div>
      <p className="text-secondBlue text-[24px] font-bold">
        Information About Us
      </p>
      <p className="text-subText text-base my-[25px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque
        ultrices mattis aliquam, malesuada diam est. Malesuada sem tristique
        amet erat vitae eget dolor lobortis. Accumsan faucibus vitae lobortis
        quis bibendum quam.
      </p>
      <div className="flex gap-x-3">
        <div className="w-[25px] h-[25px] rounded-full bg-secondPurple"></div>
        <div className="w-[25px] h-[25px] rounded-full bg-fifthPink"></div>
        <div className="w-[25px] h-[25px] rounded-full bg-fourthBlue"></div>
      </div>
    </div>
  );
};
