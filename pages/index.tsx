import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Work from "../components/Work";
import Skills from "../components/Skills";
import About from "../components/About";

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
      <section className="snap-center">
        <Work />
      </section>
      <section id="about" className="snap-start">
        <About />
      </section>
      <section>
        <Skills />
      </section>
    </div>
  );
}
