import Head from "next/head";
import React from "react";
import Layout from "../../components/SteeringRackRepair/global/Layout";
import Main from "../../components/SteeringRackRepair/global/Main";
import Hero from "@/components/SteeringRackRepair/Heroblock/Hero";
import Repair from "@/components/SteeringRackRepair/RemontBlock/Repair";
import Faults from "../../components/SteeringRackRepair/Faults/Faults";
import Contacting from "@/components/SteeringRackRepair/contacting/Contacting";
import Reika from "@/components/SteeringRackRepair/Reika/Reika";
import Price from "@/components/SteeringRackRepair/Price/Price";
import WhyWe from "@/components/SteeringRackRepair/WhyWE/WhyWe";
import Reviews from "@/components/SteeringRackRepair/Reviews/Reviews";
import { Metadata } from "next";
import Advantages from "@/components/SteeringRackRepair/Advantages/Advantages";
import Map from "@/components/SteeringRackRepair/Map/Map";
export const metadata: Metadata = {
  title: "Ремонт рулевой рейки",
  description: "ывфыфыввфыв",
  keywords: "awdwwwwwwwwwww",
  icons: "/SteeringRackRepair/Acura.png",
};
const page = () => {
  return (
    <>
      <Layout>
        <Main>
          <Hero />
          <Repair />
          <Faults />
          <Contacting />
          <Reika />
          <Price />
          <WhyWe />
          <Reviews />
          <Advantages />
          <Map />
        </Main>
      </Layout>
    </>
  );
};

export default page;
