import { Header } from "./Header";
import { Footer } from "./Footer";

type Props = {
  children: any;
};

export default function MainLayout({ children }: Props) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
