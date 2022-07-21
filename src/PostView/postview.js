import React, { useState, useEffect } from "react";
import './postview.css'
import like from "../Images/like.png"
import share from "../Images/share.png"
import camera from "../Images/camera.png"
import spiral from "../Images/spiral.png"

export default function Postview() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3004/user")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // console.log(data);
        setData(data);
      });
  });

  return (
    <div className="container">
      <div className='header'>
            <img id="spiral" src={spiral} alt="Clicking photos"/>
            <div className='appname'>Instaclone</div>
            <img id="camera" src={camera} alt="Clicking photos"/>
      </div>
      {data.map((elem, i) => {
        return (
          <div className="block">
            <div className="block-header">
              <div key={i}>
                <b>{elem.name}</b>
                <p className="loc">{elem.location}</p>
              </div>
              <p className="dots">...</p>
            </div>

            <div>
              <img className="postImage" src={elem.PostImage} alt="Wait still not found"/>
            </div>

            <div className="img">
              <img id="like" src = {like} alt="Wait still not found"></img>
              <img id="share" src={share} alt="Wait still not found"></img>
              <span>{elem.date}</span>
            </div>
            <p className="likes">{elem.likes + "  likes"}</p>
            <p className="likes"><b>{elem.description}</b></p>
          </div>
        );
      })}
    </div>
  );
}