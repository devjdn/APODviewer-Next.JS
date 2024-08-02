'use client';

import { Home, Book, Rocket, CodeXml, Satellite, Orbit } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from 'clsx';

export default function Nav() {
  const pathname = usePathname();

  const links = [
    { name: 'Home', url: '/', icon: <Home /> },
    { name: 'APODViewer', url: '/apod', icon: <Satellite /> },
    { name: 'MARSViewer', url: '/mars', icon: <Orbit /> },
    { name: 'Guide', url: '/guide', icon: <Book /> },
    { name: 'NASA API documentation', url: 'https://api.nasa.gov/#apod', icon: <Rocket /> },
    { name: 'Official APOD website', url: 'https://apod.nasa.gov/apod/astropix.html', icon: <Rocket /> },
    { name: 'SPACEviewer Github', url: 'https://github.com/devjdn/APODviewer-Next.JS', icon: <CodeXml /> },
  ];

  return (
    <nav className="global-nav">
      <ul className="nav-list">
        {links.map((link) => (
          <li
          className="nav-list-item"
          key={link.name}
          >
            <Link className="nav-link" href={link.url}>
              <p className={clsx(
                '',
                {'text-black dark:text-white': pathname === link.url}
              )}>{link.name}</p>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
