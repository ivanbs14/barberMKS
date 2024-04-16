import Start from "@/components/Start";
import Header from "@/components/Header";
import About from "@/components/About";
import Contact from "@/components/Contact";

export default function Home() {

  return (
    <main
      className={`h-screen`}
    >
      <Header />
      
      <Start />
      <About />
      <Contact />
    </main>
  );
}
