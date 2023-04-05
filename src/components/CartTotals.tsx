export const CartTotals = () => {
  return (
    <div>
      <p className="text-secondBlue text-xl text-center font-bold">
        Cart Totals
      </p>
      <div className="bg-fifteenthGray py-8 px-4 mt-[20px]">
        <div className="flex flex-col gap-y-6">
          <div>
            <div className="flex justify-between items-center mb-[10px]">
              <p className="text-secondBlue">Subtotals:</p>
              <p className="text-secondBlue">$219.00</p>
            </div>
            <hr className="border border-fourteenthGray" />
          </div>
          <div>
            <div className="flex justify-between items-center mb-[10px]">
              <p className="text-secondBlue">Totals:</p>
              <p className="text-secondBlue">$526.00</p>
            </div>
            <hr className="border border-fourteenthGray" />
          </div>
          <div className="flex gap-x-1">
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
            <p className="text-twelfthGray text-xs">
              Shipping & taxes calculated at checkout
            </p>
          </div>
          <button className="rounded-[2px] px-5 py-2 bg-fourthGreen text-white">
            Proceed To Checkout
          </button>
        </div>
      </div>
    </div>
  );
};
