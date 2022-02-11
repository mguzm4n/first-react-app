import React, { useState } from "react";
import './css/sidebar.css';

const Sidebar = () => {
    let [menuOpen, setMenuOpen] = useState(false);

    return(
        <div className={`sidebar ${menuOpen ? "change" : ""}`}>
            <div className={`menu-box ${menuOpen ? "" : "change"}`} onClick={ () => setMenuOpen(!menuOpen) } >
                { menuOpen 
                    ? <>
                        <div className="menu-bar x-menu x1"></div>
                        <div className="menu-bar x-menu x2"></div>
                      </>
                    : <>
                        <div className="menu-bar"></div>
                        <div className="menu-bar"></div>
                        <div className="menu-bar"></div>
                      </>
                }
            </div>
        </div>
    );
};

export default Sidebar;