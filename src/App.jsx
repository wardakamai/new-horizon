import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ServicesPage from './pages/ServicesPage'
import TransferServicesPage from './pages/TransferServicesPage'
import ProductsPage from './pages/ProductsPage'
import EN590DieselPage from './pages/products/EN590DieselPage'
import JetA1Page from './pages/products/JetA1Page'
import CrudeOilPage from './pages/products/CrudeOilPage'
import VirginFuelOilD6Page from './pages/products/VirginFuelOilD6Page'
import HowItWorksPage from './pages/HowItWorksPage'
import CompliancePage from './pages/CompliancePage'
import ContactPage from './pages/ContactPage'
import StorageAgentPage from './pages/StorageAgentPage'
import InjectionInspectionAgentPage from './pages/InjectionInspectionAgentPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/"                           element={<HomePage />} />
          <Route path="/about"                      element={<AboutPage />} />
          <Route path="/services"                   element={<ServicesPage />} />
          <Route path="/transfer-services"          element={<TransferServicesPage />} />
          <Route path="/storage-agent"              element={<StorageAgentPage />} />
          <Route path="/injection-inspection-agent" element={<InjectionInspectionAgentPage />} />
          <Route path="/products"                   element={<ProductsPage />} />
          <Route path="/products/en590-diesel"      element={<EN590DieselPage />} />
          <Route path="/products/jet-a1"            element={<JetA1Page />} />
          <Route path="/products/crude-oil"           element={<CrudeOilPage />} />
          <Route path="/products/virgin-fuel-oil-d6" element={<VirginFuelOilD6Page />} />
          <Route path="/how-it-works"               element={<HowItWorksPage />} />
          <Route path="/compliance"                 element={<CompliancePage />} />
          <Route path="/contact"                    element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
