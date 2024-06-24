import React, { useState, useEffect } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import classNames from 'classnames';

interface Link {
  link: string;
  title: string;
}
const links: Link[] = [
  {
    link: '/',
    title: 'ABOUT ME'
  },
  {
    link: '/Resume',
    title: 'RESUME'
  },
  {
    link: '/Projects',
    title: 'PROJECTS'
  },
  {
    link: '/Contact',
    title: 'CONTACT'
  }
]

const AdvancedLink = ({link, title}: Link) => {
  const location = useLocation();
  return (
    <li>
      <Link to={link} className={classNames({
        active: location.pathname === link
      })}>
      {title}
      </Link>
    </li>
  )
}

export const Layout: React.FC = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (!isNavVisible && isAnimating) {
      const timer = setTimeout(() => {
        setIsAnimating(false);
      }, 500); // Длительность анимации закрытия

      return () => clearTimeout(timer);
    }
  }, [isNavVisible, isAnimating]);

  const toggleNavVisibility = () => {
    if (isNavVisible) {
      setIsAnimating(true);
      setIsNavVisible(false);
    } else {
      setIsNavVisible(true);
    }
  };

 
  return (
    <div className="layout">
      <header className="header">
        <div className="left-header">
          <Link to="/">
            <h2>
              Daria
              <br />
              Eremeeva
            </h2>
          </Link>
          <p>
            / FRONT-END <br /> DEVELOPER
          </p>
        </div>
        <nav className={classNames('nav-bar', { 'show': isNavVisible, 'hide': !isNavVisible && isAnimating})}>
          <ul>
        {links.map(l => <AdvancedLink link={l.link} title={l.title} key={l.title} />)}
          </ul>
        </nav>
        <div className={classNames('container', { 'change': isNavVisible })} onClick={toggleNavVisibility}>
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <div className="by">
          <p>© 2024 by Daria Eremeeva</p>
        </div>
        <div className="write-me">
          <p>
            <strong>Write</strong>
          </p>
          <p>eremeevad1999@gmail.com</p>
        </div>
      </footer>
    </div>
  );
};
