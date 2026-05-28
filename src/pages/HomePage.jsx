import Seo from '../components/Seo'
import { WEBSITE_SCHEMA } from '../seo-schemas'
import Hero from '../components/Hero'
import About from '../components/About'
import Stats from '../components/Stats'
import Products from '../components/Products'
import Process from '../components/Process'
import WhyUs from '../components/WhyUs'
import CTA from '../components/CTA'
import Contact from '../components/Contact'

export default function HomePage() {
  return (
    <>
      <Seo
        title="Petroleum Products Supplier | New Horizon Oil and Gas"
        description="New Horizon Oil and Gas is an official petroleum mandate supplying crude oil, EN590 diesel, Jet A1, LNG, LPG and fuel oil to verified buyers globally."
        keywords="oil and gas supplier, global oil supplier, petroleum products supplier, petroleum supplier, oil products exporter, oil and gas trading company, international fuel supplier, authorized petroleum mandate, verified oil supplier, wholesale fuel supplier, bulk fuel supplier, energy trading company, petroleum trading company, oil mandate company"
        path="/"
        type="website"
        schemas={[WEBSITE_SCHEMA]}
      />
      <Hero />
      <About />
      <Stats />
      <Products />
      <Process />
      <WhyUs />
      <CTA />
      <Contact />
    </>
  )
}
