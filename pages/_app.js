import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import { MDXProvider } from "@mdx-js/react";
import MDXComponents from "../components/MDXComponents";

export default function MyApp({ Component, pageProps }) {
  return (
    <MDXProvider components={MDXComponents}>
      <Component {...pageProps} />
    </MDXProvider>
  );
}
