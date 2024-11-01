import React from "react";
import Layout from "@/components/Layout";
import Header from "@/components/Header/Header";
import Burger from "../../components/Burger/Burger";
import Footer from "@/components/Footer/Footer";
import Main from "@/components/Main";
import Contacts from "@/components/Contacts/Contacts";
import Price from "@/components/Price/Price";

const page = () => {
  return (
    <div>
      <Layout>
        <Header />
        <Burger />
        <Main>
          <div className="container"></div>
          <Price />
          <Contacts />
        </Main>
        <Footer></Footer>
      </Layout>
    </div>
  );
};

export default page;
