import Head from "next/head";
import Nav from "../_components/Nav";
import HeaderSection from "@/_components/HeaderSection";
import InternSection from "@/_components/InternSection";
import ProjectSection from "@/_components/ProjectSection";
import DesignSection from "@/_components/DesignSection";
import Footer from "@/_components/Footer";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Head>
        <title>Meetali Kapse – Frontend Developer & Designer</title>
        <meta
          name="description"
          content="Design-minded frontend developer focused on inclusive, accessible interfaces and real-world problem solving."
        />
        <meta
          name="keywords"
          content="Meetali Kapse, frontend developer, React, web developer, UI UX designer, software engineer"
        />
        <meta name="author" content="Meetali Kapse" />
        <meta
          property="og:title"
          content="Meetali Kapse – Frontend Developer"
        />
        <meta
          property="og:description"
          content="Explore my projects, internships, and design work."
        />
        <meta property="og:url" content="https://meetalikapse.me" />
        <meta property="og:type" content="website" />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <HeaderSection />
      <InternSection />
      <ProjectSection />
      <DesignSection />
      <Footer />
    </div>
  );
}
