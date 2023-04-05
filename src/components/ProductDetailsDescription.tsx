import { AiOutlineArrowRight } from "react-icons/ai";

export const ProductDetailsDescription = () => {
  const details = [1, 2, 3, 4];
  return (
    <div className="container mx-auto px-[150px]">
      <div className="flex gap-x-12">
        <a className="cursor-pointer text-secondBlue text-[18px] font-bold">
          Description
        </a>
        <a className="cursor-pointer text-secondBlue text-[18px] font-bold">
          Additional Info
        </a>
        <a className="cursor-pointer text-secondBlue text-[18px] font-bold">
          Reviews
        </a>
        <a className="cursor-pointer text-secondBlue text-[18px] font-bold">
          Video
        </a>
      </div>
      <div className="mb-[20px] mt-[40px]">
        <p className="text-secondBlue text-[18px] mb-[15px] font-bold">
          Varius tempor.
        </p>
        <p className="text-twelfthGray text-sm">
          Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor
          ornare faucibus vel sed et eleifend habitasse amet. Montes, mauris
          varius ac est bibendum. Scelerisque a, risus ac ante. Velit
          consectetur neque, elit, aliquet. Non varius proin sed urna, egestas
          consequat laoreet diam tincidunt. Magna eget faucibus cras justo,
          tortor sed donec tempus. Imperdiet consequat, quis diam arcu, nulla
          lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui,
          massa viverr .
        </p>
      </div>
      <div>
        <p className="text-secondBlue text-[18px] mb-[15px] font-bold">
          More details
        </p>
        <div className="flex flex-col gap-y-4">
          {details.map((data, idx) => (
            <div key={idx} className="flex gap-x-2 items-center">
              <AiOutlineArrowRight />
              <p className="text-twelfthGray text-sm">
                Aliquam dis vulputate vulputate integer sagittis. Faucibus ds
                diam arcu, nulla lobortis justo netus dis. Eu in fringilla
                vulputate nunc nec. Dui, massa viverr.
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
