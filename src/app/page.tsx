import AboutUs from "@/components/AboutUs/AboutUs";
import CallToAction from "@/components/CallToAction/CallToAction";
import Courses from "@/components/Courses/Courses";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col justify-between items-center min-h-screen">
        
        <Hero/>
        <AboutUs/>
        <CallToAction/>
        <Courses/>
    </div>
    
  );
}
