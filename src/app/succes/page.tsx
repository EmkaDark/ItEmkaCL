import Burger from "@/components/Burger/Burger";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Layout from "@/components/Layout";
import BidSuc from "@/components/Succes/BidSuc/BidSuc";
import Main from "@/components/Succes/Main/Main";
import React from "react";

const page = () => {
  return (
    <Layout>
      <Header />
      <Burger />
      <Main>
        <BidSuc />
      </Main>
      <Footer></Footer>
    </Layout>
  );
};

export default page;
