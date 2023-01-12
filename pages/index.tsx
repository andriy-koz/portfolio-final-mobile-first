import Head from 'next/head';
import Navigation from '../components/Navigation';
import About from '../components/sections/About';
import Features from '../components/sections/Features';
import Hero from '../components/sections/Hero';

export default function Home() {
  return (
    <>
      <Head>
        <title>Koz Dev - Desarrollo de software</title>
        <meta
          name='description'
          content='Diseño y desarrollo de aplicaciones, sitios web, CRM y software en general'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navigation />
      <Hero />
      <main>
        <About />
        <Features />
      </main>
    </>
  );
}
