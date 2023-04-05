type Props = {
  title: string;
  subTitle: string;
};

export const Jumbotron = ({ title, subTitle }: Props) => {
  return (
    <div className="bg-secondGray h-[15vh] flex items-center py-[100px]">
      <div className="mx-auto container px-[150px]">
        <p className="text-secondBlue text-[28px] font-bold">{title}</p>
        <p className="mt-[10px] text-pink">{subTitle}</p>
      </div>
    </div>
  );
};
