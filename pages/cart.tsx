import { CartTotals } from "@/src/components/CartTotals";
import { Jumbotron } from "@/src/components/Jumbotron";
import Image from "next/image";
import { AiFillCloseCircle } from "react-icons/ai";

export default function ShoppingCart() {
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
    <div>
      <Jumbotron title="Shopping Cart" subTitle="Shopping Cart" />
      <div className="container mx-auto py-[100px] px-[150px]">
        <div className="grid grid-cols-3 gap-x-6">
          <div className="col-span-2 w-full">
            <table className="w-full text-center">
              <thead>
                <tr>
                  <th>
                    <p className="text-secondBlue text-left">Product</p>
                  </th>
                  <th>
                    <p className="text-secondBlue">Price</p>
                  </th>
                  <th>
                    <p className="text-secondBlue">Quantity</p>
                  </th>
                  <th>
                    <p className="text-secondBlue">Total</p>
                  </th>
                </tr>
              </thead>
              <tbody>
                {cartData.map((data, idx) => (
                  <tr key={idx} className="border-b-2 border-fourteenthGray">
                    <td>
                      <div className="flex gap-x-3 items-center justify-start text-left py-4">
                        <div className="relative">
                          <a className="absolute -top-1 -right-1 cursor-pointer">
                            <AiFillCloseCircle />
                          </a>
                          <Image
                            src={data.imgUrl}
                            width={83}
                            height={87}
                            alt="walao"
                          />
                        </div>
                        <div>
                          <p className="text-secondBlue">{data.description}</p>
                          <p className="text-twelfthGray">
                            {data.description_color}
                          </p>
                          <p className="text-twelfthGray">
                            {data.description_size}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="text-secondBlue">{data.price}</td>
                    <td className="text-secondBlue">{data.quantity}</td>
                    <td className="text-secondBlue">{data.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="w-full flex justify-end">
              <button className="rounded-[2px] px-5 py-2 bg-pink text-white mt-[20px] w-fit">
                Clear Cart
              </button>
            </div>
          </div>
          <CartTotals />
        </div>
      </div>
    </div>
  );
}
