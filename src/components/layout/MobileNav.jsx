import { useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import Button from '../ui/Button.jsx'
import { company } from '../../data/company.js'
import { primaryNav } from '../../data/navigation.js'
import styles from './MobileNav.module.css'

/**
 * Mobile navigation: an explicit disclosure panel opened by a labeled button.
 * Nothing here is hover-driven.
 *
 * This is a disclosure, not a modal — the panel sits in the DOM immediately
 * after its button, so keyboard users simply Tab into it and focus is never
 * moved for them. That keeps the behaviour predictable and avoids a focus
 * trap the pattern does not need.
 *
 * Behaviour:
 *   - the button reports state via aria-expanded / aria-controls
 *   - Escape closes the panel and returns focus to the button
 *   - clicking or tapping anywhere outside closes it
 *   - selecting any link closes it
 */
export default function MobileNav({ className = '' }) {
  const [isOpen, setIsOpen] = useState(false)
  const toggleRef = useRef(null)
  const wrapperRef = useRef(null)

  const close = () => setIsOpen(false)

  useEffect(() => {
    if (!isOpen) return undefined

    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        setIsOpen(false)
        toggleRef.current?.focus()
      }
    }

    /* Close when interacting anywhere outside the button and panel. */
    function handlePointerDown(event) {
      if (!wrapperRef.current?.contains(event.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('pointerdown', handlePointerDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('pointerdown', handlePointerDown)
    }
  }, [isOpen])

  return (
    <div
      ref={wrapperRef}
      className={[styles.wrapper, className].filter(Boolean).join(' ')}
    >
      <button
        ref={toggleRef}
        type="button"
        className={styles.toggle}
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
        onClick={() => setIsOpen((open) => !open)}
      >
        <span className={styles.toggleIcon} aria-hidden="true">
          <span className={isOpen ? styles.barHiddenTop : styles.bar} />
          <span className={isOpen ? styles.barHidden : styles.bar} />
          <span className={isOpen ? styles.barHiddenBottom : styles.bar} />
        </span>
        {isOpen ? 'Close' : 'Menu'}
      </button>

      <div id="mobile-navigation" className={styles.panel} hidden={!isOpen}>
        <nav aria-label="Primary, mobile">
          <ul className={styles.list}>
            {primaryNav.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.to === '/'}
                  onClick={close}
                  className={({ isActive }) =>
                    [styles.link, isActive && styles.active]
                      .filter(Boolean)
                      .join(' ')
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.panelFooter}>
          <Button to="/contact" fullWidth onClick={close}>
            Request a Quote
          </Button>
          <a
            className={styles.panelPhone}
            href={company.phone.href}
            onClick={close}
          >
            Call {company.phone.display}
          </a>
        </div>
      </div>
    </div>
  )
}
