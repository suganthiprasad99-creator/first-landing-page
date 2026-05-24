import AboutUsPage from "@/components/AboutUs"
import ContactUs from "@/components/ContactUs"
import CtaCard from "@/components/CtaCard"
import Hero from "@/components/hero"
import LadderAcademy from "@/components/LadderAcademy"
import OurProducts from "@/components/OurProducts"
import OurServices from "@/components/OurServices"
import WhyChoseKosal from "@/components/WhyChoseKosal"
import Footer from "@/components/Footer"
import ProductCarousel from "@/components/OurProducts"

export default function Home() {
  const mockProducts = [
  {
    id: "bites",
    name: "Bites",
    tagline: "Bites: Restaurant Management Software",
    description: "Manage every aspect of your restaurant — from digital menus and real-time kitchen displays to seamless billing, analytics, and POS integration.",
    imageSrc: "/Product Image.png", // Place your image in the public folder
  },
  {
    id: "linkedin-ai",
    name: "Linkedin AI Agent",
    tagline: "Linkedin AI Agent: Outreach Automation",
    description: "Automate your B2B networking and pipeline generation with smart AI responses, personality-based tailoring, and automated scheduling metrics.",
    imageSrc: "/Product Image.png",
  },
  {
    id: "retailer-crm",
    name: "Retailer's CRM",
    tagline: "Retailer's CRM: Customer Retention Suite",
    description: "Keep track of active buyer behavior, reward loyalty programs automatically, and trigger custom promotions tailored to individual shopping habits.",
    imageSrc: "/Product Image.png",
  },
  {
    id: "collection-app",
    name: "Collection App",
    tagline: "Collection App: Logistics Tracking",
    description: "Optimize delivery tracks, log inventory updates on-the-go, and keep dispatch communication centralized in one fluid mobile environment.",
    imageSrc: "/Product Image.png",
  },
];
  return (
    <main className="flex-1">
      <Hero />
      
      <AboutUsPage />
    
      <ProductCarousel products={mockProducts} />

      <OurServices />

      <WhyChoseKosal />

      <LadderAcademy />

      <CtaCard />

      <ContactUs />

      <Footer />
    </main>
  );
}

