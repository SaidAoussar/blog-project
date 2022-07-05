import { ReactNode } from "react";
import Nav from "./navbar/Nav";
import Footer from "./footer/Footer";

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div>
      <Nav />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
