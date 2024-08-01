import Image from "next/image";
import SpaceHero from "@/guide-imgs/hero.jpg";
import Link from "next/link";
import { Satellite, Orbit, Book, CodeXml, Rocket } from "lucide-react";

export default function Home() {

  const siteLinks = [
    {
      groupName: 'On-site links',
      links: [
        { name: 'APODviewer', url: '/space/apod', icon: <Satellite />, text: "APODviewer is a service allowing users to view the different photos and videos that have been part of NASA's Astronomy Picture Of the Day series." },
        { name: 'MARSviewer', url: '/space/mars', icon: <Orbit />, text: "MARSviewer is similar to APODviewer in the fact that it allows users to view media from a NASA API, however this service is for their Mars Rover API." },
        { name: 'Guide', url: '/space/guide', icon: <Book />, text: "A comprehensive guide on how to use all the features on our site. As well as explaining some of the methods being used throughout." },
      ]
    },
    {
      groupName: 'External links',
      links: [
        { name: 'NASA API documentation', url: 'https://api.nasa.gov/#apod', icon: <Rocket />, text: "View the official NASA API documentation for their various API's. NASA has a series of API's publicly available, with links to supporting documentation." },
        { name: 'Official APOD website', url: 'https://apod.nasa.gov/apod/astropix.html', icon: <Rocket />, text: "Take a look at the official APOD website, by NASA themselves. It's remained largely unchanged since the 90's, and has a quite a retro user experience." },
        { name: 'SPACEviewer Github', url: 'https://github.com/devjdn/APODviewer-Next.JS', icon: <CodeXml />, text: "We made the source code for this site publicly available for viewing on Github, so you can see how this website works, feel free to drop a follow and a star :)" },
      ],
    }
  ]

  return (
    <main className="home">
      <div className="hero">
        <Image src={SpaceHero} alt="Earth at night, from the ISS"/>
        <h1>Explore the depths of space, closer to home, and further beyond.</h1>
      </div>
      
    </main>
  );
}
