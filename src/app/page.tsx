import Image from "next/image";
import styles from "./page.module.scss";
import Link from "next/link";
import Layout from "@/components/Layout";
import { Metadata } from "next";
import Burger from "@/components/Burger/Burger";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import Why from "@/components/Why/Why";
import Service from "@/components/Service/Service";
import Portfolio from "@/components/Portfolio/Portfolio";
import Command from "@/components/Command/Command";
import Contacts from "@/components/Contacts/Contacts";
import Main from "@/components/Main";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <div className={styles.page}>
      <Layout>
        <Header />
        <Burger></Burger>
        <Main>
          <>
            <Hero></Hero>
            <Service />
            <Why />
            <Portfolio />
            <Command />
            <Contacts />
          </>
        </Main>
        <Footer />
      </Layout>
    </div>
  );
}
