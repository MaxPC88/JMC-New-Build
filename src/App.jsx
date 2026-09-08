import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './routes.jsx'

/**
 * Application root. Owns the router; the route table lives in routes.jsx.
 */
export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}
