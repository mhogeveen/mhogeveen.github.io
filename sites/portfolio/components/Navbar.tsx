'use client'
import { useEffect, useState } from 'react'
import { SocialIcons } from './SocialIcons'

type ScrollPosition = 'home' | 'over' | 'portfolio'

type Section = {
  name: string
  id: ScrollPosition
}

const sections: Section[] = [
  {
    name: 'Home',
    id: 'home',
  },
  {
    name: 'Over mij',
    id: 'over',
  },
  {
    name: 'Portfolio',
    id: 'portfolio',
  },
]

export const Navbar = () => {
  const [isMenuActive, setIsMenuActive] = useState(false)
  const [scrollPosition, setScrollPosition] = useState<ScrollPosition>('home')

  const toggleIsMenuActive = () => setIsMenuActive((prev) => !prev)

  useEffect(() => {
    const config = {
      root: null,
      rootMargin: '-30% 0px -30% 0px',
      threshold: 0.1,
    }

    const observer = new IntersectionObserver(function (entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting === true) {
          setScrollPosition(entry.target.id as ScrollPosition)
        }
      })
    }, config)

    const sectionElements = document.querySelectorAll(
      '#home, #over, #portfolio'
    )

    sectionElements.forEach((el) => el !== null && observer.observe(el))
  }, [])

  return (
    <header>
      <div
        className={
          isMenuActive ? 'navbar-menu-button active-menu' : 'navbar-menu-button'
        }
        onClick={toggleIsMenuActive}
        role="button"
      >
        <div className="menu-button-bar"></div>
        <div className="menu-button-bar"></div>
        <div className="menu-button-bar"></div>
      </div>
      <div className="indicator">
        {sections.map((item) => (
          <a
            href={`#${item.id}`}
            className="indicator-dot"
            key={item.id}
            role="button"
          >
            <div className="dot-inactive"></div>
            <div
              className={
                scrollPosition === item.id
                  ? 'dot-active dot-full'
                  : 'dot-active'
              }
            ></div>
          </a>
        ))}
      </div>
      <SocialIcons />
      <nav className={isMenuActive ? 'drawer active' : 'drawer'}>
        <div className="drawer-background"></div>
        {sections.map((section) => (
          <a
            key={section.id}
            className="drawer-item"
            href={`#${section.id}`}
            onClick={toggleIsMenuActive}
          >
            <span className="drawer-item-title">{section.name}</span>
            <div className="drawer-item-dot"></div>
          </a>
        ))}
      </nav>
    </header>
  )
}
