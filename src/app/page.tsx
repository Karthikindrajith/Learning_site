// import Navbar from "@/components/Navbar/Navbar";
import Navbar from "@/components/Navbar/Navbar"
import Hero from "@/components/Hero/Hero"
import WhySPS from "@/components/WhySPS/WhySPS"
import Courses from "@/components/Courses/Courses"
import Projects from "@/components/Projects/Projects"
import Features from "@/components/Features/Features"
import ProjectLab from "@/components/ProjectLab/ProjectLab";
import SuccessWall from "@/components/SuccessWall/SuccessWall"
import Footer from "@/components/Footer/Footer"
export default function Home() {
  return (
    <main>
  <Navbar/>
  <Hero/>
      <Courses />
 <Projects />
 <Features />
 <ProjectLab />
     <SuccessWall />
 <WhySPS />
 <Footer/>
      
    </main>
  );
}