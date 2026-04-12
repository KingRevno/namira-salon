import Header from "@/components/Header";
import WIPBanner from "@/components/WIPBanner";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingCallButton from "@/components/FloatingCallButton";
import ChatBot from "@/components/ChatBot";

export default function Home() {
  return (
    <>
      <Header />
      <WIPBanner />
      <main className="pt-10 lg:pt-11">
        <Hero />
        <Services />
        <About />
        <Gallery />
        <Contact />
      </main>
      <Footer />
      <FloatingCallButton />
      <ChatBot />
    </>
  );
}
