import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import HowItWorks from "./components/HowItWorks";
import Model from "./components/Model";
import Navbar from "./components/Navbar";
import LocomotiveScroll from "locomotive-scroll";

import * as Sentry from "@sentry/react";

function App() {
  // Locomotive Scroll
  const locomotiveScroll = new LocomotiveScroll({
    lenisOptions: {
      smoothTouch: true,
      touchMultiplier: 1,
    },
  });

  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Highlights />
      <Model />
      <Features />
      <HowItWorks />
      <Footer />
    </main>
  );
}

export default Sentry.withProfiler(App);
