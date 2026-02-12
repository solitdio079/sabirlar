import React from "react";
import { Helmet } from "react-helmet";
import { useSiteMetadata } from "../hooks/use-site-metadata";

const Seo = ({ title, description, pathname, children }) => {
  const {
    title: defaultTitle,
    description: defaultDescription,
    image,
    siteUrl,
    keywords,
  } = useSiteMetadata();

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image}`,
    url: `${siteUrl}${pathname || ``}`,
  };

  return (
    <Helmet>
      <title>{seo.title}</title>

      <meta name="description" content={seo.description} />
      <meta name="keywords" content={keywords.join(", ")} />

      {/* OpenGraph */}
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:type" content="website" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />

      <link rel="icon" href="/favicon.ico" />
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Öz Sabırlar Lojistik",
          description:
            "Kastamonu merkezli lojistik firması. Nakliye, hurda taşımacılığı ve vinç hizmetleri.",
          url: "https://sabirlar.com",
          image: "https://sabirlar.com/app-img.png",
          areaServed: {
            "@type": "AdministrativeArea",
            name: "Kastamonu, Türkiye",
          },
          address: {
            "@type": "PostalAddress",
            addressLocality: "Kastamonu",
            addressCountry: "TR",
          },
          sameAs: [
            // sosyal medya linklerin varsa buraya ekle
            // "https://www.instagram.com/....",
            // "https://www.facebook.com/...."
          ],
        })}
      </script>

      {children}
    </Helmet>
  );
};

export default Seo;
