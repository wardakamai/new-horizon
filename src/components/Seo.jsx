import { Helmet } from 'react-helmet-async'
import { BASE_URL, SITE_NAME, GEO_LAT, GEO_LNG, ORG_SCHEMA } from '../seo-schemas'

// Replace with a proper 1200×630 OG image placed at /public/og-image.jpg
const DEFAULT_IMAGE     = `${BASE_URL}/site-logo.png`
const DEFAULT_TITLE     = 'New Horizon Oil and Gas | International Oil & Gas Facilitation & Mandating'
const DEFAULT_DESC      =
  'New Horizon Oil and Gas is an official mandate to oil and gas suppliers, facilitating the global supply of crude oil, EN590 diesel, Jet A1, LNG, LPG and fuel oil to serious buyers. Based in Astana, Kazakhstan.'
const DEFAULT_KEYWORDS  =
  'oil gas supply, crude oil mandate, EN590 diesel supplier, Jet A1 fuel, LNG LPG supply, petroleum trade facilitation, Kazakhstan oil supplier, official mandate oil gas, petroleum buyer seller'

/**
 * <Seo /> — drop this at the top of every page component.
 *
 * Props:
 *  title       – full <title> string (required per page)
 *  description – meta description, 150–160 chars ideal
 *  keywords    – comma-separated keyword string
 *  path        – route path, e.g. "/products" (for canonical + og:url)
 *  image       – absolute URL for OG / Twitter image
 *  type        – og:type (default "website")
 *  schemas     – array of Schema.org objects to merge into @graph
 *                (Organization is always added automatically)
 */
export default function Seo({
  title       = DEFAULT_TITLE,
  description = DEFAULT_DESC,
  keywords    = DEFAULT_KEYWORDS,
  path        = '/',
  image       = DEFAULT_IMAGE,
  type        = 'website',
  schemas     = [],
}) {
  const canonicalUrl = `${BASE_URL}${path}`

  // Merge the site-wide Organization with any page-specific schemas
  const graph = [ORG_SCHEMA, ...schemas]

  return (
    <Helmet>
      {/* ── Core ─────────────────────────────────────────────────────── */}
      <html lang="en" />
      <title>{title}</title>
      <meta name="description"   content={description} />
      <meta name="keywords"      content={keywords} />
      <meta name="author"        content={SITE_NAME} />
      <meta name="robots"        content="index, follow" />
      <meta name="theme-color"   content="#187767" />

      {/* ── Geo ──────────────────────────────────────────────────────── */}
      <meta name="geo.placename" content="Astana, Kazakhstan" />
      <meta name="geo.region"    content="KZ-AST" />
      <meta name="geo.position"  content={`${GEO_LAT};${GEO_LNG}`} />
      <meta name="ICBM"          content={`${GEO_LAT}, ${GEO_LNG}`} />

      {/* ── Canonical ────────────────────────────────────────────────── */}
      <link rel="canonical" href={canonicalUrl} />

      {/* ── Open Graph ───────────────────────────────────────────────── */}
      <meta property="og:type"        content={type} />
      <meta property="og:site_name"   content={SITE_NAME} />
      <meta property="og:title"       content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url"         content={canonicalUrl} />
      <meta property="og:image"       content={image} />
      <meta property="og:image:alt"   content={`${SITE_NAME} — International Oil & Gas Facilitation`} />
      <meta property="og:image:width"  content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale"      content="en_US" />

      {/* ── Twitter Card ─────────────────────────────────────────────── */}
      <meta name="twitter:card"        content="summary_large_image" />
      <meta name="twitter:title"       content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image"       content={image} />

      {/* ── JSON-LD (@graph bundles all schemas into one script tag) ─── */}
      <script type="application/ld+json">
        {JSON.stringify({ '@context': 'https://schema.org', '@graph': graph })}
      </script>
    </Helmet>
  )
}
