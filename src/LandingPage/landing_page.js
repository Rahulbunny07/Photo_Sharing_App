import React from "react";
// import {useFocusEffect} from '@react-navigation/native'
import landing from "../Images/landing.png";
import "./landing_page.css";
import { Link } from "react-router-dom";
export default function LandingPage() {
  return (
    <div className="home">
      <div className="left">
        <img src={landing} alt="Home is landing" />
      </div>
      <div className="right">
        <h2>10x Team 04</h2>
        <Link to="/postview">
          <button>Enter</button>
        </Link>
      </div>
    </div>
  );
}
