import Header from "./components/Header";
import Hero from "./components/Hero";
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
    <div style={{ overflowX: "hidden", background: "#F6F9FA" }}>
      <Header />
      <Hero />
      <PlatformShowcase />
      <PainPoints />
      <Features />
      <Pricing />
      <Differentials />
      <ForWhom />
      <International />
      <GuidedDemo />
      <ScheduleForm />
      <QuickStart />
      <Comparison />
      <Trust />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
}
