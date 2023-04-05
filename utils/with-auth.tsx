import Cookies from "js-cookie";
import { NextComponentType } from "next";
import { useEffect, useState } from "react";

export const withAuth = (ComposedComponent: NextComponentType) => {
  const Wrapper = (props: any): JSX.Element => {
    // const [isLoggedIn, setIsLoggedIn] = useState(false);
    // useEffect(() => {
    //   const init = () => {
    //     const token = Cookies.get("token");
    //     if (token) {
    //       setIsLoggedIn(true);
    //     }
    //   };
    //   init();
    // }, []);
    return <ComposedComponent {...props} />;
  };
  Wrapper.getInitialProps = ComposedComponent.getInitialProps;
  (Wrapper as any).origGetInitialProps = (
    ComposedComponent as any
  ).origGetInitialProps;
  return Wrapper;
};
