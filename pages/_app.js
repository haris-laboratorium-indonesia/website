import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import Layout from "../components/Layout";
import { MDXProvider } from "@mdx-js/react";
import MDXComponents from "../components/MDXComponents";
import { ThemeProvider } from "next-themes";

export default function MyApp({ Component, pageProps }) {
  return (
    <MDXProvider components={MDXComponents}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </MDXProvider>
  );
}
