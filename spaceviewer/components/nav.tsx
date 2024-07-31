'use client';

import { Home, Book, Rocket, CodeXml, Satellite, Orbit } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from 'clsx';

export default function Nav() {
  const pathname = usePathname();

  const linkGroup = [
    {
      groupName: 'Internal links',
      links: [
        { name: 'Home', url: '/', icon: <Home /> },
        { name: 'APODviewer', url: '/space/apod', icon: <Satellite /> },
        { name: 'MARSviewer', url: '/space/mars', icon: <Orbit /> },
        { name: 'Guide', url: '/space/guide', icon: <Book /> },
      ],
    },
    {
      groupName: 'External links',
      links: [
        { name: 'NASA API documentation', url: 'https://api.nasa.gov/#apod', icon: <Rocket /> },
        { name: 'Official APOD website', url: 'https://apod.nasa.gov/apod/astropix.html', icon: <Rocket /> },
        { name: 'SPACEviewer Github', url: 'https://github.com/devjdn/APODviewer-Next.JS', icon: <CodeXml /> },
      ],
    },
  ];

  return (
    <nav className="nav">
      {linkGroup.map((group, groupIndex) => (
          <div key={group.groupName} className="link-group">
            <h4>{group.groupName}</h4>
            <ul key={groupIndex} className="nav-list">
              {group.links.map((link, linkIndex) => (
                <Link key={linkIndex} href={link.url}>
                  <li
                    key={link.name}
                    className={clsx(
                      'hover:bg-neutral-200 hover:dark:bg-neutral-700',
                      { 'bg-neutral-200 dark:bg-neutral-700': pathname === link.url }
                    )}
                  >
                    {link.icon}
                    <p>{link.name}</p>
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        ))}
    </nav>
  );
}
