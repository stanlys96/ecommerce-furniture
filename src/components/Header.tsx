import { useRouter } from "next/router";
import { FC, useEffect, useState } from "react";
import { getCookie, deleteCookie } from "cookies-next";
import { useSelector, useDispatch } from "react-redux";
import { RootState, authActions } from "../stores";
import useSWR from "swr";
import { fetcher } from "@/utils/axios";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Header = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const account = useSelector((state: RootState) => state.auth);
  useEffect(() => {
    if (getCookie("token")) {
      dispatch(authActions.setToken(getCookie("token") as string));
    }
  }, [account]);

  return (
    <div>
      <div className="bg-purple">
        <div className="container mx-auto flex justify-between py-3 items-center px-[150px]">
          <p className="text-white">{account.email}</p>
          <ul className="flex gap-x-4 text-white items-center">
            <li>
              <a href="#">English</a>
            </li>
            {/* <li>
              <a href="#">USD</a>
            </li> */}
            <li>
              {account.token ? (
                <a
                  onClick={() => {
                    deleteCookie("token");
                    dispatch(authActions.setToken(""));
                    dispatch(authActions.setEmail(""));
                  }}
                  href="#"
                >
                  Logout
                </a>
              ) : (
                <a onClick={() => router.push("/login")} href="#">
                  Login
                </a>
              )}
            </li>
            <li>
              <a href="#">Wishlist</a>
            </li>
            <li>
              <a
                className="cursor-pointer"
                onClick={() => router.push("/cart")}
              >
                <AiOutlineShoppingCart />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <div className="container mx-auto py-5 flex items-center px-[150px]">
          <p className="mr-10">Hekto</p>
          <ul className="flex gap-x-2 items-center">
            <li>
              <a onClick={() => router.push("/")} href="#">
                Home
              </a>
            </li>
            <li>
              <a onClick={() => router.push("/blog")} href="#">
                Blog
              </a>
            </li>
            <li>
              <a onClick={() => router.push("/shop")} href="#">
                Shop
              </a>
            </li>
            <li>
              <a onClick={() => router.push("/contact")} href="#">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
