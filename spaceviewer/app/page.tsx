import Image from "next/image";
import SpaceHero from "@/guide-imgs/hero.jpg";
import { CircleArrowDown } from "lucide-react";

export default function Home() {

  return (
    <>
      <div className="hero">
        <Image src={SpaceHero} alt="Earth at night, from the ISS"/>
        <div className="hero-content">
          <h1>Explore the depths of space, closer to home, and further beyond.</h1>
          <a className="about-link" href="#about">
            <div className="about-directive"><p>About SPACEViewer</p><CircleArrowDown/></div>
          </a>
        </div>
      </div>
      <div className="about" id="about">
        <article className="about-article">
          <h3>What is SPACEViewer</h3>
          <p>SPACEViewer is an astronomy/astrophotography gallery website made to allow fellow space admirers to view some of the most stunning images taken of our universe. SPACEViewer has numerous different features to give you the best experience possible. We have APODViewer, MARSViewer, and a guide to ensure you know how to use the site. As well as this, we have links to the official NASA API docs, and the SPACEViewer Github.</p>
        </article>
        <article className="about-article">
          <h3>APODViewer</h3>
          <p>APODViewer is a section of SPACEViewer that utilises the NASA Astronomy Picture Of the Day API to serve you a daily picture/video, alongside its title, explanation, date, and copyright owner. On APODViewer, you can view the daily image/video, interact with a date picker to view past APOD images/videos, and use our number input to be fed back media from random dates, with the option to view its details, share it, and open it externally.</p>
        </article>
        <article className="about-article">
          <h3>MARSViewer</h3>
          <p>MARSViewer is a feature of SPACEViewer that leverages the NASA Mars Rover Photos API to deliver a daily dose of images captured by various Mars rovers. On MARSViewer, you can explore the latest images transmitted from the Martian surface, along with detailed information about the rover, camera, and the Sol (Martian day) when the photo was taken. You can interact with a date picker to browse photos from previous missions, use our random date generator to discover images from different days, and enjoy options to view detailed metadata, share captivating Martian landscapes, and open the images in an external viewer for a closer look.</p>
        </article>
        <article className="about-article">
          <h3>For developers</h3>
          <p>SPACEViewer includes convenient links to the official NASA API documentation for both the Astronomy Picture of the Day (APOD) and Mars Rover Photos (MRP) APIs, ensuring you have direct access to detailed information and usage guidelines. Additionally, you can visit the official APOD website for daily updates and an extensive archive of past images and videos. For developers interested in exploring or contributing to the project, we provide a link to the SPACEViewer GitHub repository, where you can find the source code and collaborate with the community.</p>
        </article>
      </div>
    </>
  );
}
