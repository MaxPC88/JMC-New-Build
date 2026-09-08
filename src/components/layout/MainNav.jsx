import { NavLink } from 'react-router-dom'
import { primaryNav } from '../../data/navigation.js'
import styles from './MainNav.module.css'

/**
 * Desktop primary navigation.
 *
 * Flat list, no dropdowns — nothing here depends on hover, so it works for
 * keyboard, touch and mouse identically. NavLink applies aria-current="page"
 * on the active route, and the active state is shown with a bottom rule and
 * bolder weight as well as color.
 */
export default function MainNav({ className = '' }) {
  return (
    <nav
      className={[styles.nav, className].filter(Boolean).join(' ')}
      aria-label="Primary"
    >
      <ul className={styles.list}>
        {primaryNav.map((item) => (
          <li key={item.to}>
            <NavLink
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                [styles.link, isActive && styles.active].filter(Boolean).join(' ')
              }
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}
