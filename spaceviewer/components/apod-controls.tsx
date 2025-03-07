'use client';

import { useEffect } from "react";
import { CircleArrowUp, Grid3X3, LayoutGrid } from "lucide-react";

interface ControlProps {
    date?: string;
    setDate?: (date: string) => void;
    count?: number;
    setCount?: (count: number) => void;
    fetchApod: () => void;
    page: "History" | "Generator";
    layout?: 'two-col' | 'three-col';
    setLayout?: (layout: 'two-col' | 'three-col') => void;
}

const Controls: React.FC<ControlProps> = ({ date, setDate, count, setCount, fetchApod, page, layout, setLayout }) => {

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        fetchApod();
    }

    return (
        <div className="apod-controls">
            {page === "History" && setDate && (
                <form onSubmit={handleSubmit} className="historic-date-selector">
                    <input
                        type="date"
                        value={date}
                        onChange={(event) => setDate(event.target.value)}
                    />
                    <button className="fetch-btn" onClick={fetchApod}><CircleArrowUp /></button>
                </form>
            )}
            {page === "Generator" && setCount && (
                <>
                    <form onSubmit={handleSubmit} className="count-form">
                        <input
                            type="number"
                            value={count}
                            min={2}
                            max={100}
                            onChange={(event) => setCount(parseInt(event.target.value) || 0)}
                        />
                        <button className="fetch-btn" type="submit"><CircleArrowUp /></button>
                    </form>
                    {setLayout && (
                        <div className="grid-view-btns">
                            <button className={`view-btn ${layout === 'two-col' ? 'active' : ''}`} onClick={() => setLayout('two-col')}>
                                <LayoutGrid />
                            </button>
                            <button className={`view-btn ${layout === 'three-col' ? 'active' : ''}`} onClick={() => setLayout('three-col')}>
                                <Grid3X3 />
                            </button>
                        </div>
                    )}
                </>
            )}
        </div>
    );
}

export default Controls;
