import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './routes.jsx'

/**
 * Application root. Owns the router; the route table lives in routes.jsx.
 */
export default function App() {
  return (
    /* basename keeps routing correct when the site is served from a
       sub-path, as it is on GitHub Pages (/JMC-New-Build/). It is '/' during
       development, so local behaviour is unchanged. */
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <AppRoutes />
    </BrowserRouter>
  )
}
