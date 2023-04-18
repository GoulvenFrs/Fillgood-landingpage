import Head from 'next/head';
import Menu from './Menu';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>FillGood</title>
        <link rel="icon" type="image/x-icon" href="/favicon.ico"></link>
      </Head>
      <Menu/>
      <main>{children}</main>
      <Footer/>
    </>
  );
};

export default Layout;
