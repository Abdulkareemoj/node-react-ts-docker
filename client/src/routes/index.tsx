import { createFileRoute } from "@tanstack/react-router";
import Header from "../components/header";
import Footer from "../components/footer";
import Feature from "../components/feature";
import Hero from "../components/hero";
import LogoGrid from "../components/logogrid";
import Newsletter from "../components/newsletter";
import CTA from "../components/calltoact";
import RSection from "../components/section";
import Contact from "../components/contact";
import Stats from "../components/stats";
import Pricing from "../components/pricing";

export const Route = createFileRoute("/")({
  component: () => (
    <>
      <Header />
      <Hero />
      <Feature />
      <Stats />
      <CTA /> <RSection />
      <LogoGrid />
      <Pricing />
      <Newsletter />
      <Contact />
      <Footer />
    </>
  ),
});
