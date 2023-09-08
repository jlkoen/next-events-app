import Layout from '@/components/layout/layout.tsx';
import { AppProps } from 'next/app';
import { NextUIProvider } from '@nextui-org/system';
import '@/app/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </NextUIProvider>
  );
}
