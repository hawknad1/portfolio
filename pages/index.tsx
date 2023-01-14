import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import About from "../components/About";
import Clients from "../components/Clients";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="snap-y snap-mandatory">
      <Head>
        <title>Dankwah Thomas Offical Website</title>
      </Head>
      <Header />
      <section id="hero" className="snap-start">
        <Hero />
      </section>
      <section id="portfolio" className="snap-center">
        <Portfolio />
      </section>
      <section id="about" className="snap-start">
        <About />
      </section>
      <section id="skills" className="snap-start">
        <Skills />
      </section>
      <section id="contact" className="snap-start">
        <Contact />
      </section>
    </div>
  );
}
