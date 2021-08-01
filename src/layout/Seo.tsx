import Head from "next/head";

export interface SeoProps {
  description: string;
  title: string;
  openGraph?: {
    type: "website" | "article";
    image: string;
    article: {
      publishedTime: string;
    };
  };
}

const Seo: React.FC<SeoProps> = ({ description, title, openGraph = {} }) => {
  const url = `https://janakhpon.gitlab.io/`;
  return (
    <Head>
      <html lang={"en-us"} />
      <title>Ja Nakh Pon | Portfolio </title>
      <meta
        name="keywords"
        content="Ja Nakh Pon, Janakh Pon, Janakh, JaNakhPon, Zin Minn Htut Oo, ZinMinnHtutOo, ZinMinn Htut Oo, ZinMin Htut Oo, Zin Min, Zin Min Htut Oo, Greentech, Greentech INC, GDEVs, GTGMyanmar, Myanmar, Mawlamyine, Software Engineer, Fullstack Developer, Full-stack Developer, Full Stack Developer"
      />
      <meta name="author" content="Ja Nakh Pon" />
      <meta name="robots" content="index,follow" />
      <meta name="googlebot" content="index,follow" />
      <meta name="description" content="Ja Nakh Pon's Portfolio Website" />
      <meta name="theme-color" content="#006ABC" />

      {/* openGraph */}
      <meta property="og:title" content={"Ja Nakh Pon | Portfolio"} />
      <meta
        property="og:description"
        content="Ja Nakh Pon's Portfolio Website"
      />
      <meta property="og:type" content={"website"} />
      <meta property="og:url" content={url} />
      <meta property="og:locale" content="en_IE" />
      <meta property="og:site_name" content={"Ja Nakh Pon | Portfolio"} />
      <meta property="og:image" content={`avatar.png`} />

      {/* Twitter */}
      <meta name="twitter:site" content={`@ja_nakh`} />
      <meta name="twitter:creator" content={`@ja_nakh`} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={"Ja Nakh Pon | Portfolio"} />
      <meta
        name="twitter:description"
        content="Ja Nakh Pon's Portfolio Website"
      />
      <meta name="twitter:image" content={"avatar.png"} />

      <link rel="canonical" href={url} />
      <link rel="icon" href="/favicon.ico" />
      <link rel="icon" href="/favicon-16x16.png" sizes="16x16" />
      <link rel="icon" href="/favicon-32x32.png" sizes="32x32" />
      <link
        rel="apple-touch-icon"
        href="/apple-touch-icon.png"
        sizes="180x180"
      />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
    </Head>
  );
};

export default Seo;
