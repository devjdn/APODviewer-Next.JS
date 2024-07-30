import { CircleArrowDown, Ellipsis, Info, Share, SquareArrowUpRight } from "lucide-react";

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
              <button className="item-menu-btn">
                <Ellipsis/>
              </button>
              <div className="apod-options">
                <ul className="apod-options-list">
                  <li className="apod-options-list-item">
                    <button>
                      <Info/>
                      <p>APOD details</p>
                    </button>
                  </li>
                  <li className="apod-options-list-item">
                    <button>
                      <SquareArrowUpRight/>
                      <p>Open</p>
                    </button>
                  </li>
                  <li className="apod-options-list-item">
                    <button>
                      <Share/>
                      <p>Share</p>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
        </li>
        </>
    );
}

export default APODGridContent;