import type { AppProps } from "next/app";
import { LanguageProvider } from "@context/index";
import Layout from "@layout/index";
import "@styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  let layoutProps = (Component as any).layoutProps;
  if (typeof layoutProps === "function") layoutProps = layoutProps(pageProps);

  return (
    <LanguageProvider>
      <Layout {...layoutProps}>
        <Component {...pageProps} />
      </Layout>
    </LanguageProvider>
  );
}
export default MyApp;
