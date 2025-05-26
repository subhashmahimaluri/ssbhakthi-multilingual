// pages/_app.tsx
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.scss'; // Changed from .css to .scss
import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { LocationProvider } from '@/context/LocationContext';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    require('bootstrap/dist/js/bootstrap.bundle.min.js');
    
    // Add instance-specific body class
    const locale = router.locale || 'te';
    if (locale === 'te' || locale === 'en') {
      document.body.className = 'instance-te';
    } else if (locale === 'hi') {
      document.body.className = 'instance-hi';
    } else if (locale === 'kn') {
      document.body.className = 'instance-kn';
    }
  }, [router.locale]);

  return <LocationProvider><Component {...pageProps} /></LocationProvider>;
}