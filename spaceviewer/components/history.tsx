'use client';

import React, { useState, useEffect, useCallback } from "react";
import APODcontent from "./apod-content";
import Controls from "./controls";

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

const ApodComponent: React.FC = () => {
  const [date, setDate] = useState<string>('1995-06-16');
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

  useEffect(() => {
    fetchApod();
  }, []);

  return (
    <>
      <Controls date={date} setDate={setDate} fetchApod={fetchApod} page="History" />
      {loading && 
        <div className="empty-message">
          <p>The light has not reached earth yet</p>
        </div>
      }
      {error && 
        <div className="empty-message">
          <p>{error}</p>
        </div>
      }
      {historicData && (
        <APODcontent url={historicData.url} title={historicData.title} explanation={historicData.explanation} date={historicData.date} hdurl={historicData.hdurl} copyright={historicData.copyright} media_type={historicData.media_type} />
      )}
      {!historicData && (
        <div className="empty-message">
          <p>The light has not reached earth yet</p>
        </div>
      )}
    </>
  );
};
  
export default ApodComponent;