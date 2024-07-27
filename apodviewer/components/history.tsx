'use client';

import { ArrowUpRight, CircleArrowUp, CornerRightUp } from "lucide-react";
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

const fetchHistoricApod = async (date: string): Promise<APODData> => {
    const apiKey = process.env.NEXT_PUBLIC_NASA_API_KEY;

    try {
      const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${date}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data: APODData = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching APOD data:', error);
      throw error;
    }
};

const Controls: React.FC<{ date: string, setDate: (date: string) => void, fetchApod: () => void }> = ({ date, setDate, fetchApod }) => {

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    fetchApod();
  };

    return (
      <div className="apod-controls">
        <div className="date-form-wrapper">
        <h3>Select a date</h3>
        <form onSubmit={handleSubmit} className="historic-date-selector">
          <input
            type="date" 
            value={date} 
            onChange={(event) => setDate(event.target.value)} 
          />
          <button onClick={fetchApod}><CircleArrowUp/></button>
        </form>
        </div>
        <div className="date-form-wrapper">
          <h3>Select a range of dates</h3>
          <form onSubmit={handleSubmit} className="historic-date-selector">
            <input
              type="date" 
              value={date}
              onChange={(event) => setDate(event.target.value)} 
            />
            <hr/>
            <input
              type="date" 
              value={date}
              onChange={(event) => setDate(event.target.value)} 
            />
            <button onClick={fetchApod}><CircleArrowUp/></button>
          </form>
        </div>
      </div>
    );
};

const ApodComponent: React.FC = () => {
  const [date, setDate] = useState<string>('');
  const [historicData, setHistoricData] = useState<APODData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // Fetch APOD data for the selected date
  const fetchApod = async () => {
    if (!date) {
      setError('Please select a date.');
      return;
    }
    setLoading(true);
    setError(null);
    try {
      const data = await fetchHistoricApod(date);
      setHistoricData(data);
    } catch (err) {
      setError('Failed to fetch APOD data.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Controls date={date} setDate={setDate} fetchApod={fetchApod} />
      {loading && 
        <div className="empty-message">
          <p>The light has not reached earth yet</p>
        </div>
      }
      {error && 
        <p>{error}</p>
      }
      {historicData && (
        <>
          <div className="apod-info">
            <h1>{historicData.title}</h1>
            <p>{historicData.explanation}</p>
          </div>
          <div className="apod">
          {historicData.media_type === 'image' ? (
            <img src={historicData.url} alt={historicData.title} />
          ) : (
            <iframe
              src={historicData.url}
              title={historicData.title}
              width="100%"
              height="500px"
              frameBorder="0"
              allow="autoplay; fullscreen"
            />
          )}
          <div className="expand-overlay">
            <div className="expand-text">
              <a href={historicData.hdurl} target="_blank">
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
      )}
    </>
  );
};
  
export default ApodComponent;