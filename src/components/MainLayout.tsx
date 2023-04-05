import Header from "./Header";
import { Footer } from "./Footer";
import { verify } from "@/services/user.services";
import { fetcher } from "@/utils/axios";
import useSWR from "swr";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authActions, RootState } from "../stores";
import { getCookie } from "cookies-next";

type Props = {
  children: any;
};

export default function MainLayout({ children }: Props) {
  const dispatch = useDispatch();
  const account = useSelector((state: RootState) => state.auth);
  useEffect(() => {
    if (account.token) {
      verify({ token: account.token })
        .then((result) => {
          dispatch(authActions.setEmail(result?.data.email));
        })
        .catch((e) => {
          console.log(e);
        });
    }
  }, [account]);
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
