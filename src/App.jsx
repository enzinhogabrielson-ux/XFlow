import { LanguageProvider } from "./i18n/LanguageContext";
import PromoBanner from "./components/PromoBanner";
import Header from "./components/Header";
import Hero from "./components/Hero";
import LazySection from "./components/LazySection";
import PlatformShowcase from "./components/PlatformShowcase";
import PainPoints from "./components/PainPoints";
import Features from "./components/Features";
import Pricing from "./components/Pricing";
import Differentials from "./components/Differentials";
import ForWhom from "./components/ForWhom";
import International from "./components/International";
import GuidedDemo from "./components/GuidedDemo";
import ScheduleForm from "./components/ScheduleForm";
import QuickStart from "./components/QuickStart";
import Comparison from "./components/Comparison";
import Trust from "./components/Trust";
import FAQ from "./components/FAQ";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";

export default function App() {
  return (
    <LanguageProvider>
      <div style={{ overflowX: "hidden", background: "#F6F9FA" }}>
        <PromoBanner />
        <Header />
        <Hero />
        <LazySection height="500px">
          <PlatformShowcase />
        </LazySection>
        <LazySection height="500px">
          <PainPoints />
        </LazySection>
        <LazySection height="600px">
          <Features />
        </LazySection>
        <LazySection height="600px">
          <Pricing />
        </LazySection>
        <LazySection height="500px">
          <Differentials />
        </LazySection>
        <LazySection height="400px">
          <ForWhom />
        </LazySection>
        <LazySection height="500px">
          <International />
        </LazySection>
        <LazySection height="600px">
          <GuidedDemo />
        </LazySection>
        <LazySection height="700px">
          <ScheduleForm />
        </LazySection>
        <LazySection height="600px">
          <QuickStart />
        </LazySection>
        <LazySection height="600px">
          <Comparison />
        </LazySection>
        <LazySection height="300px">
          <Trust />
        </LazySection>
        <LazySection height="400px">
          <FAQ />
        </LazySection>
        <LazySection height="400px">
          <FinalCTA />
        </LazySection>
        <LazySection height="300px">
          <Footer />
        </LazySection>
      </div>
    </LanguageProvider>
  );
}
