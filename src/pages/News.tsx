import { GoToTop } from "@/Utils/GoToTop";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Navbar/Header";
import MainSection from "@/components/News/MainSection";
import { useEffect } from "react";

const News = () => {
  useEffect(() => {
    document.title = "Cryptocurrency | News";
  }, []);

  return (
    <div className="w-screen min-h-screen relative">
      <Header />
      <MainSection />
      <Footer />
      <GoToTop />
    </div>
  );
};

export default News;
