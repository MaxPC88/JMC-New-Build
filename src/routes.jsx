import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from './components/layout/Layout.jsx'
import { legacyRedirects } from './data/navigation.js'

import About from './pages/About.jsx'
import Capabilities from './pages/Capabilities.jsx'
import Careers from './pages/Careers.jsx'
import Contact from './pages/Contact.jsx'
import CustomProducts from './pages/CustomProducts.jsx'
import Equipment from './pages/Equipment.jsx'
import Home from './pages/Home.jsx'
import Milling from './pages/Milling.jsx'
import News from './pages/News.jsx'
import NotFound from './pages/NotFound.jsx'
import Packaging from './pages/Packaging.jsx'
import Quality from './pages/Quality.jsx'
import SampleParts from './pages/SampleParts.jsx'
import Turning from './pages/Turning.jsx'

/**
 * The site's route table.
 *
 * Every route renders inside <Layout>, which is registered as a pathless
 * layout route so the header and footer persist across navigation.
 *
 * URLs are descriptive and lowercase, replacing the legacy .html filenames.
 * Those old paths are still served here as redirects so existing inbound
 * links, bookmarks and search results keep working.
 */
export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />

        <Route path="capabilities" element={<Capabilities />} />
        <Route path="capabilities/milling" element={<Milling />} />
        <Route path="capabilities/turning" element={<Turning />} />
        <Route path="capabilities/packaging" element={<Packaging />} />

        <Route path="equipment" element={<Equipment />} />
        <Route path="quality" element={<Quality />} />
        <Route path="sample-parts" element={<SampleParts />} />
        <Route path="custom-products" element={<CustomProducts />} />
        <Route path="news" element={<News />} />
        <Route path="careers" element={<Careers />} />
        <Route path="contact" element={<Contact />} />

        {/* Legacy .html URLs from the previous site. */}
        {legacyRedirects.map(({ from, to }) => (
          <Route
            key={from}
            path={from.replace(/^\//, '')}
            element={<Navigate to={to} replace />}
          />
        ))}

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
