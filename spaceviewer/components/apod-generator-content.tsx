'use client';

import { useState, useRef, useEffect } from "react";
import { CircleArrowDown, Ellipsis, Info, Share, SquareArrowUpRight, X } from "lucide-react";
import APODcontent from "./apod-content";

interface APODContentProps {
    hdurl?: string;
    media_type: string;
    title: string;
    url: string;
    explanation: string;
    date: string;
    copyright: string;
}

const APODGridContent : React.FC<APODContentProps> = ({hdurl, media_type, title, url, explanation, copyright, date}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isDetailsOpen, setIsDetailsOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  const toggleDetailsPopup = () => {
    setIsDetailsOpen(!isDetailsOpen);

    if (!isDetailsOpen){
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }


  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        /* 
        remember that this statement above is checking
        if the target of the mouse click is within the useRef element
        and that as Node is just explicity saying that it is a DOM node for type safety
        */
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return(
    <>
      <li key={title} className="apod-grid-item">
        {media_type === 'image' ? (
          <img src={url} alt={title}/>
        ) : (
          <iframe
            src={url}
            title={title}
            width="100%"
            allow="autoplay; fullscreen"
          />
        )}
        <div className="grid-item-content">
          <button className="item-menu-btn" onClick={toggleMenu}>
            <Ellipsis/>
          </button>
          <div className="apod-options" aria-hidden={!isOpen} ref={menuRef}>
            <ul className="apod-options-list">
              <li className="apod-options-list-item">
                <button className="option-btn" onClick={toggleDetailsPopup}>
                  <p>Details</p>
                </button>
              </li>
              <hr />
              <li className="apod-options-list-item">
                <a href={hdurl} target="_blank">
                  <button className="option-btn">
                    <p>Open</p>
                  </button>
                </a>
              </li>
              <hr />
              <li className="apod-options-list-item">
                <button className="option-btn">
                  <p>Share</p>
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="apod-popup" aria-hidden={!isDetailsOpen}>
          <header>
            <button className="popup-close-btn" onClick={toggleDetailsPopup}>
              <X/>
            </button>
          </header>
          <div className="popup-content">
            <APODcontent url={url} title={title} explanation={explanation} date={date} hdurl={hdurl} copyright={copyright} media_type={media_type} />
          </div>
        </div>
      </li>
    </>
  );
}

export default APODGridContent;
