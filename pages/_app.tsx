import '../styles/globals.css';
import 'tailwindcss/tailwind.css';

export default function MyApp({ Component, pageProps }: { Component: any; pageProps: any }) {
  return <Component {...pageProps} />;
}
