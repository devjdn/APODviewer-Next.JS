'use client';

import React, { useState } from 'react';

type Tab = {
  label: string;
  content: React.ReactNode;
};

interface TabsProps {
  tabs: Tab[];
}

const Tabs: React.FC<TabsProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <>
    <header className="tab-header">
      <div className="tabs">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`tab ${index === activeTab ? 'active' : ''}`}
            onClick={() => setActiveTab(index)}
          >
            <p>{tab.label}</p>
          </button>
        ))}
      </div>
    </header>
    <div className="tab-content">
      {tabs[activeTab].content}
    </div>
    </>
  );
};

export default Tabs;
