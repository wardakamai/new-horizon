import { StrictMode } from 'react'
import { hydrateRoot, createRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import './index.css'
import App from './App.jsx'

const rootElement = document.getElementById('root')

const tree = (
  <StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </StrictMode>
)

/*
 * If react-snap has already prerendered HTML into this element,
 * we hydrate instead of wiping and re-rendering — preserving the
 * server-snapshot meta tags that crawlers see.
 */
if (rootElement.hasChildNodes()) {
  hydrateRoot(rootElement, tree)
} else {
  createRoot(rootElement).render(tree)
}
