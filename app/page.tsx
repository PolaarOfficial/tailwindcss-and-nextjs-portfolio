import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection"
import ProjectsSection from "@/components/ProjectsSection";
import FooterSection from "@/components/FooterSection";
export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <FooterSection />
    </main>
  )
}

// <a href="https://www.flaticon.com/free-icons/dog" title="dog icons">Dog icons created by Freepik - Flaticon</a>
