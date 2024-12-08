import Head from 'next/head';
import Sidebar from '../app/components/Sidebar';
import MainContent from '../app/components/MainContent';
import '../app/globals.css'; // Ensure this path is correct

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Hannan</title>
        <meta name="description" content="Portfolio of Syed Hannan Shah, a Computer Engineering student with experience in software engineering and machine learning." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex">
        <Sidebar />
        <MainContent />
      </div>
    </>
  );
};

export default Home;

