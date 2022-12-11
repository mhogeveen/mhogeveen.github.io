import { ReactNode } from "react";
import { GridLines, Navbar } from "@components";

type Props = {
  children?: ReactNode;
};

export const Layout = ({ children }: Props) => {
  return (
    <>
      <Navbar menu={false} toggleMenu={() => ({})} />
      <main>{children}</main>
      <footer>footer</footer>
      <GridLines />
    </>
  );
};
