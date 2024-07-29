'use client';

import { ArrowUpRight, CircleArrowUp, CornerRightUp } from "lucide-react";
import React, { useState, useEffect, useCallback } from "react";
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
        {/* <div className="date-form-wrapper">
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
        </div> */}
      </div>
    );
};

const ApodComponent: React.FC = () => {
  const [date, setDate] = useState<string>('');
  const [historicData, setHistoricData] = useState<APODData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // Fetch APOD data for the selected date
  const fetchApod = useCallback(async () => {
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
  }, [date]);

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
      <APODcontent url={historicData.url} title={historicData.title} explanation={historicData.explanation} date={historicData.date} hdurl={historicData.hdurl} copyright={historicData.copyright} media_type={historicData.media_type} />
    )}
    </>
  );
};
  
export default ApodComponent;