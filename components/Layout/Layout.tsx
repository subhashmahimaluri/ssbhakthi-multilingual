// components/Layout/Layout.tsx
import React from 'react';
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
import { Container } from 'react-bootstrap';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

const Layout: React.FC<LayoutProps> = ({ 
  children, 
  title = 'Multilingual App', 
  description = 'A Next.js app with Telugu and English support' 
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className="d-flex flex-column min-vh-100">
        <Header />
        
        <main className="flex-grow-1">
          <Container>
            {children}
          </Container>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Layout;