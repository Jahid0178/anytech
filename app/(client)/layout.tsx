import React from "react";
import Header from "@/components/common/Header/Header";
import Footer from "@/components/common/Footer/Footer";

interface Props {
  children: React.ReactNode;
}

const ClientLayout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default ClientLayout;
