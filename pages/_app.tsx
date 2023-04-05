import "@/styles/globals.css";
import type { AppProps } from "next/app";
import MainLayout from "@/src/components/MainLayout";
import { Provider } from "react-redux";
import { store } from "@/src/stores";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </Provider>
  );
}
