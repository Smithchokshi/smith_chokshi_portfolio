import React, { useState, useEffect } from "react";
import Education from "./components/educationSection";
import Experience from "./components/experienceSection";
import Skill from "./components/skillSection";
import About from "./components/aboutMeSection";
import SendEmailForm from "./components/sendEmailForm";
import ContactInformation from "./components/contactInformation";
import FooterSection from "./components/footerSection";
import HeroSection from "./components/heroSection";

const Portfolio = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-black text-white overflow-x-hidden">
      {/* Hero Section - The Beginning */}
      <HeroSection />

      {/* About Section - The Foundation */}
      <About />

      {/* Experience Section - The Journey */}
      <Experience />

      {/* Skills Section - The Arsenal */}
      <Skill />

      {/* Education Section - The Learning Path */}
      <Education />

      {/* Contact Section - The Connection */}
      <section className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900 py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-violet-400 bg-clip-text text-transparent">
              Let's Create Something Amazing
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Every great project starts with a conversation. Let's begin ours.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Info */}
              <ContactInformation />

              {/* Contact Form */}
              <SendEmailForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <FooterSection />
    </div>
  );
};

export default Portfolio;
