export const ContactWays = () => {
  return (
    <div>
      <p className="text-secondBlue text-[24px] font-bold">Contact Ways</p>
      <div className="grid grid-rows-2 my-[25px] gap-y-8">
        <div className="grid grid-cols-2 gap-y-8">
          <div className="flex gap-x-2 items-center">
            <div className="w-[45px] h-[45px] rounded-full bg-secondPurple"></div>
            <div>
              <p className="text-subText text-base">Tel: 877-67-88-99</p>
              <p className="text-subText text-base">Email: shop@store.com</p>
            </div>
          </div>
          <div className="flex gap-x-2 items-center">
            <div className="w-[45px] h-[45px] rounded-full bg-fifthPink"></div>
            <div>
              <p className="text-subText text-base">Support Forum</p>
              <p className="text-subText text-base">For over 24hr</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-y-8">
          <div className="flex gap-x-2 items-center">
            <div className="w-[45px] h-[45px] rounded-full bg-secondOrange"></div>
            <div>
              <p className="text-subText text-base">20 Margaret St., London</p>
              <p className="text-subText text-base">Great Britain, 3NM98-LK</p>
            </div>
          </div>

          <div className="flex gap-x-2 items-center">
            <div className="w-[45px] h-[45px] rounded-full bg-thirdGreen"></div>
            <div>
              <p className="text-subText text-base">Free standard shipping</p>
              <p className="text-subText text-base">on all orders.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
