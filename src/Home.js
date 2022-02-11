import React from "react";
import Header from "./Header";
import Contents from "./Contents";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Sidebar from "./Sidebar";

export default function Home(){
    return (<>
        <Sidebar />
        <Header />
        <Contents />
    </>);
}