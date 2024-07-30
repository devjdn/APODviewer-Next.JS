import { Orbit } from "lucide-react";
import Nav from "./nav";

export default function Header() {
    return(
        <header className="global-header">
            <a href="/">
              <div className="logo">
                <Orbit size={30}/>
                <h3>SPACEViewer</h3>
              </div>
            </a>
        </header>
    );
}