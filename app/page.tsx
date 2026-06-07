import Link from "next/link";
import Image from "next/image";
import HeroSection from "@/components/sections/HeroSection";
import ChiffresSection from "@/components/sections/ChiffresSection";
import EquipeSection from "@/components/sections/EquipeSection";
import CoursSection from "@/components/sections/CoursSection";
import ArgumentsSection from "@/components/sections/ArgumentsSection";
import TemoignagesSection from "@/components/sections/TemoignagesSection";
import CarteSection from "@/components/sections/CarteSection";
import BlogPreviewSection from "@/components/sections/BlogPreviewSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ChiffresSection />
      <EquipeSection />
      <CoursSection />
      <ArgumentsSection />
      <TemoignagesSection />
      <CarteSection />
      <BlogPreviewSection />
    </>
  );
}
