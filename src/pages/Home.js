import React, { useState } from "react";
import "./Home.css";
import SearchInput from "../components/SearchInput";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [know, setKnow] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="main_div">
      <div className="myapp">
        <h1>NPM Packages</h1>
      </div>
      <div className="listLink">
        <div className="myName">
          <span onClick={() => navigate("/favorite_list")}>
            Click me to go to my favorite package list{" "}
          </span>
        </div>
        <div className="myName">
          <span
            onClick={() => setKnow(true)}
            style={{ display: know ? "none" : "", cursor: "pointer" }}
          >
            Click me to know the owner of this App!
          </span>
          <h2 style={{ display: know ? "" : "none" }}>Kishan Kumar</h2>
        </div>
      </div>
      <div className="searchBox">
        <h2>Search for NPM Packages</h2>
        <SearchInput placeholder="Search NPM Packages" />
      </div>
    </div>
  );
}
