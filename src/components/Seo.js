import React from "react"
import { useSiteMetadata } from "../hooks/use-site-metadata"

 const Seo = ({ title, description, pathname, children }) => {
  const { title: defaultTitle, description: defaultDescription, image, siteUrl } = useSiteMetadata()

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image}`,
    url: `${siteUrl}${pathname || ``}`,
    
  }

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:url" content={seo.url} />t
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      <link rel="icon" href="./favicon.ico" />
      {children}
    </>
  )
}

export default Seo