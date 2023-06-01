import Layout from '@/components/layout/layout.tsx';
import { AppProps } from 'next/app';
import '@/app/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
