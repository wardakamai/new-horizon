import Seo from '../components/Seo'
import PageHero from '../components/PageHero'
import Contact from '../components/Contact'
import { makeBreadcrumbs, LOCAL_BUSINESS_SCHEMA } from '../seo-schemas'

export default function ContactPage() {
  return (
    <>
      <Seo
        title="Contact Us | New Horizon Oil and Gas"
        description="Submit a petroleum inquiry or request a quotation. New Horizon Oil and Gas — Astana, Kazakhstan. Email: info@newhorizonoil.com. Tel: +7 711 610 3763."
        keywords="contact New Horizon Oil Gas, oil gas inquiry, petroleum quotation request, oil supplier contact Kazakhstan, buy oil gas, oil trade inquiry, petroleum sourcing inquiry, Astana oil company contact"
        path="/contact"
        schemas={[
          makeBreadcrumbs([{ name: 'Contact', path: '/contact' }]),
          LOCAL_BUSINESS_SCHEMA,
          { '@type': 'ContactPage', name: 'Contact New Horizon Oil and Gas', url: 'https://www.newhorizonoil.com/contact' },
        ]}
      />

      <PageHero
        tag="Get in Touch"
        title="Contact New Horizon Oil and Gas"
        subtitle="Whether you have a specific product inquiry, need a formal quotation, or want to discuss a long-term supply arrangement — our team is ready to respond within 24 hours."
        breadcrumbs={[{ label: 'Contact' }]}
      />

      {/* Reuse the existing Contact section */}
      <Contact />
    </>
  )
}
