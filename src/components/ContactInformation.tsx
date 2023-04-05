export const ContactInformation = () => {
  return (
    <div className="col-span-3 bg-tenthGray p-6 h-fit">
      <p className="text-secondBlue text-[18px] font-bold">
        Contact Information
      </p>
      <input
        placeholder="Email"
        className="border-b-2 border-sixteenthGray bg-tenthGray focus:outline-pink transparent w-full p-2 my-5"
      />
      <div className="flex gap-x-1">
        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
        <p className="text-twelfthGray text-xs">
          Keep me up to date on news and exclusive offers
        </p>
      </div>
      <p className="text-secondBlue text-[18px] font-bold mt-10 mb-5">
        Shipping Address
      </p>
      <div>
        <div className="flex gap-x-8">
          <input
            placeholder="First Name"
            className="border-b-2 border-sixteenthGray bg-tenthGray focus:outline-pink transparent w-full p-2 my-3"
          />
          <input
            placeholder="Last Name"
            className="border-b-2 border-sixteenthGray bg-tenthGray focus:outline-pink transparent w-full p-2 my-3"
          />
        </div>
        <input
          placeholder="Address"
          className="border-b-2 border-sixteenthGray bg-tenthGray focus:outline-pink transparent w-full p-2 my-3"
        />
        <input
          placeholder="Address"
          className="border-b-2 border-sixteenthGray bg-tenthGray focus:outline-pink transparent w-full p-2 my-3"
        />
        <input
          placeholder="City"
          className="border-b-2 border-sixteenthGray bg-tenthGray focus:outline-pink transparent w-full p-2 my-3"
        />
        <div className="flex gap-x-8">
          <input
            placeholder="Country"
            className="border-b-2 border-sixteenthGray bg-tenthGray focus:outline-pink transparent w-full p-2 my-3"
          />
          <input
            placeholder="Postal Code"
            className="border-b-2 border-sixteenthGray bg-tenthGray focus:outline-pink transparent w-full p-2 my-3"
          />
        </div>
        <button className="rounded-[2px] px-5 py-2 bg-pink text-white mt-[10px]">
          Continue Shipping
        </button>
      </div>
    </div>
  );
};
