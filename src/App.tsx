import { ThemeProvider } from "./context/ThemeContext";
import { QuickContactProvider } from "./context/QuickContactContext";
import { Navbar } from "./components/Navbar";
import { FloatingButtons } from "./components/FloatingButtons";
import { QuickContactModal } from "./components/QuickContactModal";

import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { Services } from "./sections/Services";
import { Problems } from "./sections/Problems";
import { Portfolio } from "./sections/Portfolio";
import { Process } from "./sections/Process";
import { Pricing } from "./sections/Pricing";
import { Testimonials } from "./sections/Testimonials";
import { FAQ } from "./sections/FAQ";
import { Quote } from "./sections/Quote";
import { Contact } from "./sections/Contact";
import { FinalCTA } from "./sections/FinalCTA";
import { Footer } from "./sections/Footer";

export default function App() {
  return (
    <ThemeProvider>
      <QuickContactProvider>
        <a
          href="#inicio"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-brand-500 focus:px-4 focus:py-2 focus:text-white"
        >
          Saltar al contenido
        </a>

        <Navbar />

        <main>
          <Hero />
          <About />
          <Services />
          <Problems />
          <Portfolio />
          <Process />
          <Pricing />
          <Testimonials />
          <FAQ />
          <Quote />
          <Contact />
          <FinalCTA />
        </main>

        <Footer />

        <FloatingButtons />
        <QuickContactModal />
      </QuickContactProvider>
    </ThemeProvider>
  );
}
