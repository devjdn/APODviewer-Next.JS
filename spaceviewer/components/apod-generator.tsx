'use client'; 

import React, { useState, useEffect } from "react";
import Controls from "./apod-controls";
import APODGridContent from "./apod-generator-content";

interface APODData {
    date: string;
    explanation: string;
    hdurl?: string;
    media_type: string;
    title: string;
    url: string;
    copyright: string;
}

const fetchGeneratorApods = async (count: number) : Promise<APODData[]> => {
    const apiKey = process.env.NEXT_PUBLIC_NASA_API_KEY;

    try {
        const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&count=${count}`);

        if(!response.ok) {
            throw new Error('Error with the network response')
        }

        const data: APODData[] = await response.json();

        return data;

    } catch(error) {
        console.error('An error occurred while fetching the requested data', error)

        throw error;
    }
}

const Generator: React.FC = () => {
    const [count, setCount] = useState<number>(4);
    const [apods, setApods] = useState<APODData[] | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [layout, setLayout] = useState<'two-col' | 'three-col'>('two-col');
    const [error, setError] = useState<string | null>(null);

    const fetchApod = async () => {
        setLoading(true)
        setError(null)
        try {
            const data = await fetchGeneratorApods(count);
            setApods(data);
        } catch (err) {
            setError('Failed to fetch APOD data.');
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchApod();
    }, []);

    return(
        <>
        <Controls count={count} setCount={setCount} fetchApod={fetchApod} page="Generator" layout={layout} setLayout={setLayout} />
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
        {apods &&
          <ul className={`apod-grid ${layout}`}>
            {apods.map((apod) => (
                <APODGridContent key={apod.title} url={apod.url} title={apod.title} explanation={apod.explanation} date={apod.date} hdurl={apod.hdurl} copyright={apod.copyright} media_type={apod.media_type}/>
            ))}
          </ul>
        }
        </>
    );
}

export default Generator;