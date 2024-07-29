'use client';

import Nav from "./nav";

export default function Sidebar() {
  return(
    <div className="sidebar">
      <header className="sidebar-header">
        <a href="/"><h3>SPACEviewer</h3></a>
      </header>
      <Nav/>
      <div className="controls">
        {/* <ThemeSwitcher/> */}
      </div>
    </div>
  );
}