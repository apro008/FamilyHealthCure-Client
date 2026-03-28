import { Helmet } from 'react-helmet-async'

const SEO = ({ title, description, keywords, path = '' }) => {
  const siteName = 'Family Health Care'
  const baseUrl = 'https://familyhealthcarekolkata.com'
  const fullTitle = title ? `${title} | ${siteName}` : `${siteName} | Diagnostics & Doctor Consultations in Kolkata`

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={`${baseUrl}${path}`} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={`${baseUrl}${path}`} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  )
}

export default SEO
