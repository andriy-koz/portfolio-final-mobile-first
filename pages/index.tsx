import Head from 'next/head';
import Navigation from '../components/Navigation';

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
      <main>
        <Navigation />
      </main>
    </>
  );
}
