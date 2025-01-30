import React from "react";
import Header from "@/components/common/Header/Header";

interface Props {
  children: React.ReactNode;
}

const ClientLayout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <footer>Footer</footer>
    </>
  );
};

export default ClientLayout;
