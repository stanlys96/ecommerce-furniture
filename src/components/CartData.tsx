import Image from "next/image";

export const CartData = () => {
  const cartData = [
    {
      id: 1,
      imgUrl: "/img/cart-product-1.png",
      description: "Ut diam consequat",
      description_color: "Color: Brown",
      description_size: "Size: M",
      price: "$32.00",
      quantity: "5",
      total: "$165.00",
    },
    {
      id: 2,
      imgUrl: "/img/cart-product-1.png",
      description: "Ut diam consequat",
      description_color: "Color: Brown",
      description_size: "Size: M",
      price: "$32.00",
      quantity: "5",
      total: "$165.00",
    },
    {
      id: 3,
      imgUrl: "/img/cart-product-1.png",
      description: "Ut diam consequat",
      description_color: "Color: Brown",
      description_size: "Size: M",
      price: "$32.00",
      quantity: "5",
      total: "$165.00",
    },
    {
      id: 4,
      imgUrl: "/img/cart-product-1.png",
      description: "Ut diam consequat",
      description_color: "Color: Brown",
      description_size: "Size: M",
      price: "$32.00",
      quantity: "5",
      total: "$165.00",
    },
    {
      id: 5,
      imgUrl: "/img/cart-product-1.png",
      description: "Ut diam consequat",
      description_color: "Color: Brown",
      description_size: "Size: M",
      price: "$32.00",
      quantity: "5",
      total: "$165.00",
    },
  ];
  return (
    <div className="col-span-2">
      {cartData.map((data, idx) => (
        <div
          key={idx}
          className="flex gap-x-3 items-center justify-start text-left py-4 border-b-2 border-fourteenthGray"
        >
          <div>
            <Image src={data.imgUrl} width={83} height={87} alt="walao" />
          </div>
          <div>
            <p className="text-secondBlue">{data.description}</p>
            <p className="text-twelfthGray">{data.description_color}</p>
            <p className="text-twelfthGray">{data.description_size}</p>
          </div>
        </div>
      ))}
      <div>
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
              <input
                type="checkbox"
                id="vehicle1"
                name="vehicle1"
                value="Bike"
              />
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
    </div>
  );
};
