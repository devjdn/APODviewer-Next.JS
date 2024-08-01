interface APODContentProps {
    hdurl?: string;
    media_type: string;
    title: string;
    url: string;
    explanation: string;
    date: string;
    copyright: string;
}

const APODcontent : React.FC<APODContentProps> = ({hdurl, media_type, title, url, explanation, copyright, date}) => {

    return(
        <div className="apod">
          <div className="apod-info">
              <h1>{title}</h1>
              <p>{explanation}</p>
              <p>{date}</p>
              <p>{copyright}</p>
          </div>
          <div className="apod-media">
              {media_type === 'image' ? (
                  <>
                  <img src={url} alt={title}/>
                  <div className="open-externally">
                    <a href={hdurl} target="_blank">
                      <div className="open-externally-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
                          <path fillRule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5"/>
                          <path fillRule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z"/>
                        </svg>
                      </div>
                    </a>
                  </div>
                  </>
              ) : (
                  <iframe
                    src={url}
                    title={title}
                    width="100%"
                    height="500px"
                    allow="autoplay; fullscreen"
                  />
              )}
          </div>
        </div>
    );
}

export default APODcontent;