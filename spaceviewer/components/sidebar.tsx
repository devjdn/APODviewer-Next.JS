'use client';

import Nav from "./nav";
import { Orbit } from "lucide-react";

export default function Sidebar() {
  return(
    <div className="sidebar">
      <header className="sidebar-header">
        <a href="/">    
          <div className="logo">
            <Orbit size={30}/>
            <h3>SPACEviewer</h3>
          </div>            
        </a>
      </header>
      <Nav/>
      <div className="controls">
        {/* <ThemeSwitcher/> */}
      </div>
    </div>
  );
}