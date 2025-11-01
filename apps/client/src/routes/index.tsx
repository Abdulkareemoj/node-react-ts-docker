import { createFileRoute } from "@tanstack/react-router";

import RootLayout from "@/components/layout/RootLayout";
import Header from "@/components/landing/Header";
import Logos from "@/components/landing/Logos";
import Features from "@/components/landing/Features";
import Hero from "@/components/landing/Hero";
import HIW from "@/components/landing/How-it-works";
import Pricing from "@/components/landing/Pricing";
import Testimonial from "@/components/landing/Testimonial";
import CTA from "@/components/landing/CTA";
import FAQ from "@/components/landing/FAQ";
import Footer from "@/components/shared/Footer";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Logos />
      <Features />
      <HIW />
      <Testimonial />
      <FAQ />
      <Pricing />
      <CTA />
      <Footer />
    </>
  );
}
