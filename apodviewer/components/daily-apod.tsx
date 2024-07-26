'use client';

import React, { useState, useEffect } from "react";

interface APODData {
    date: string;
    explanation: string;
    hdurl?: string;
    media_type: string;
    title: string;
    url: string;
    copyright: string;
}

const DailyAPOD : React.FC= () => {

    const [apodData, setApodData] = useState<APODData | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchDailyAPOD = async () => {
          const apiKey = process.env.NEXT_PUBLIC_NASA_API_KEY;
          if (!apiKey) {
            setError('API key is not defined');
            return;
          }
    
          try {
            const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`);
            if (!response.ok) {
              throw new Error('Failed to fetch data from NASA API');
            }
            const data = await response.json();
            setApodData(data);
          } catch (err: any) {
            setError(err.message);
          }
        };
    
        fetchDailyAPOD();
      }, []);
    
      if (error) return <div>Error: {error}</div>;
      if (!apodData) return(
        <div className="empty-message">
          <p>The light has not reached earth yet</p>
        </div>
      );
    
    return (
      <>
        <div className="apod-info">
          <h1>{apodData.title}</h1>
          <p>{apodData.explanation}</p>
          <p>{apodData.date}</p>
          <p>{apodData.copyright}</p>
        </div>
        <div className="apod">
          {apodData.media_type === 'image' ? (
            <img src={apodData.url} alt={apodData.title} />
          ) : (
            <iframe
              src={apodData.url}
              title={apodData.title}
              width="100%"
              height="500px"
              frameBorder="0"
              allow="autoplay; fullscreen"
            />
          )}
          <div className="expand-overlay">
            <div className="expand-text">
              <a href={apodData.hdurl} target="_blank">
                <p>Open image externally</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5"/>
                  <path fillRule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </>
    );
}

export default DailyAPOD;