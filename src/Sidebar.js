import React from "react";
import './css/sidebar.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
    return(
        <div className="sidebar">
            <div className="menu-box">
                {/* <FontAwesomeIcon icon={ faBars } size="2x" /> */}
                <div className="menu-bar"></div>
                <div className="menu-bar"></div>
                <div className="menu-bar"></div>
            </div>
        </div>
    );
};

export default Sidebar;