'use client';

import React, { useState, useEffect } from "react";
import APODcontent from "./apod-content";

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
      <APODcontent url={apodData.url} title={apodData.title} explanation={apodData.explanation} date={apodData.date} hdurl={apodData.hdurl} copyright={apodData.copyright} media_type={apodData.media_type} />
    );
}

export default DailyAPOD;