import { Helmet } from "react-helmet-async";

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  noIndex?: boolean;
}

export function SEOHead({
  title = "Leadspoint CRM - #1 CRM for Growing Indian Businesses",
  description = "India's most trusted CRM platform. Manage leads, close deals, and build lasting customer relationships with WhatsApp integration. Trusted by 10,000+ businesses.",
  keywords = "CRM software India, WhatsApp CRM, lead management, sales automation, Indian CRM, business growth",
  canonical,
  ogImage = "https://leadspoint.in/leadspoint-og-image.png",
  noIndex = false
}: SEOHeadProps) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      {canonical && <link rel="canonical" href={canonical} />}
      {noIndex && <meta name="robots" content="noindex, nofollow" />}
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      {canonical && <meta property="og:url" content={canonical} />}
      
      {/* Twitter */}
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
}