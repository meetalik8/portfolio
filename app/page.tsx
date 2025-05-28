import Image from "next/image";
import Nav from "../_components/Nav";
import HeaderSection from "@/_components/HeaderSection";
import InternSection from "@/_components/InternSection";


export default function Home() {
  return (
    <div>
      <Nav />
      <HeaderSection />
      <InternSection />
    </div>
  );
}
