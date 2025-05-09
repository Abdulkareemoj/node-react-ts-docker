import { createFileRoute } from "@tanstack/react-router";
import Feature from "../components/homePage/feature";
import Hero from "../components/homePage/hero";
import LogoGrid from "../components/homePage/logogrid";
import Newsletter from "../components/homePage/newsletter";
import CTA from "../components/homePage/calltoact";
import RSection from "../components/homePage/section";
import Contact from "../components/homePage/contact";
import Stats from "../components/homePage/stats";
import Pricing from "../components/homePage/pricing";
import RootLayout from "../layouts/RootLayout";
export const Route = createFileRoute("/")({
  component: IndexRoute,
});

function IndexRoute() {
  return (
    <RootLayout>
      <Hero />
      <Feature />
      <Stats />
      <CTA /> <RSection />
      <LogoGrid />
      <Pricing />
      <Newsletter />
      <Contact />
    </RootLayout>
  );
}
