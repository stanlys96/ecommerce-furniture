import { apiClient } from "@/utils/axios";
import Image from "next/image";
import { AiOutlineHeart } from "react-icons/ai";
import Swal from "sweetalert2";

const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  },
});

type Props = {
  data: any;
};

export const ProductDetail = ({ data }: Props) => {
  const stars = [1, 2, 3, 4, 5];

  return (
    <div className="container mx-auto px-[150px]">
      <div className="shadow-lg-custom p-4">
        <div className="grid grid-cols-8 gap-x-4">
          <div className="col-span-1 grid grid-rows-3 gap-y-4 relative">
            <div className="relative">
              <Image src={data.img_url} fill alt="WALAO" />
            </div>
            <div className="relative">
              <Image src={data.img_url} fill alt="WALAO" />
            </div>
            <div className="relative">
              <Image src={data.img_url} fill alt="WALAO" />
            </div>
          </div>
          <div className="col-span-3">
            <Image src={data.img_url} width={375} height={487} alt="walao" />
          </div>
          <div className="col-span-4 flex flex-col justify-center">
            <p className="text-secondBlue text-[28px] font-bold">{data.name}</p>
            <div className="flex gap-x-1 items-center mb-[10px]">
              {stars.map((data, idx) => (
                <Image
                  key={idx}
                  width={12}
                  height={12}
                  src="/img/star.png"
                  alt="walao"
                />
              ))}
              <p className="text-secondBlue">(22)</p>
            </div>
            <div className="flex items-center gap-x-4">
              <p className="text-secondBlue text-sm">$32.00</p>
              <p className="text-pink text-sm">
                <s>$48.00</s>
              </p>
            </div>
            <p className="text-base text-twelfthGray my-[10px]">
              {data.description}
            </p>
            <div className="flex gap-x-4 items-center">
              <button
                onClick={async () => {
                  const { value: quantity } = await Swal.fire({
                    title: "Input quantity",
                    input: "number",
                    inputLabel: "Quantity",
                    inputPlaceholder: "Enter quantity",
                    showCancelButton: true,
                    showLoaderOnConfirm: true,
                    preConfirm: (quantity) => {
                      return apiClient
                        .post("/furniture/cart/addToCart", {
                          user_id: "3",
                          product_id: data.id,
                          quantity,
                        })
                        .then((response) => {
                          console.log(response, "<<<");
                          Toast.fire({
                            icon: "success",
                            title: "Added to cart successfully!",
                          });
                        })
                        .catch((error) => {
                          Swal.showValidationMessage(
                            `Request failed: ${error}`
                          );
                        });
                    },
                    inputValidator: (value) => {
                      return new Promise((resolve, reject) => {
                        if (
                          !value ||
                          value.toString() === "0" ||
                          value.toString().includes("-") ||
                          value.toString().includes("e") ||
                          value.toString().includes(".") ||
                          value.toString().includes("--")
                        ) {
                          resolve("Input is not valid!");
                        } else {
                          resolve("");
                        }
                      });
                    },
                  });
                }}
                className="rounded-[2px] px-5 py-2 bg-pink text-white w-fit"
              >
                Add To Cart
              </button>
              <a className="cursor-pointer">
                <AiOutlineHeart width={60} height={60} />
              </a>
            </div>
            <div className="flex gap-x-2 items-center">
              <p className="text-secondBlue font-bold my-[15px]">Categories:</p>
              <p className="text-secondBlue my-[15px]">{data.categories}</p>
            </div>
            <div className="flex gap-x-2 items-center">
              <p className="text-secondBlue font-bold">Tags:</p>
              <p className="text-secondBlue my-[15px]">{data.categories}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
