import React, { useEffect, useRef, useState } from "react";
import "./Image.css";
export default function Image({ item, type }) {
  const [isHover, setIsHover] = useState(false);

  
  useEffect(() => {
    if(type==="videos"){
      const video = document.getElementById(`${item.id}`);
    
      video.addEventListener("mouseover" , () => {
          video.play();
      });
  
      video.addEventListener("mouseout" , () => {
          video.pause();
      });
    }
  },[])

  return (
    <div
      role="button"
      className={`${type === "videos" ? 'my-3' : 'my-2'} cursor-pointer ${isHover && type==="images" ? "image-block" : ""}`}
      onMouseOver={() => setIsHover(true)}
      onMouseOut={() => setIsHover(false)}
    >
      {type === "images" ? (
        <img
          src={item.largeImageURL}
          style={{ width: 400 }}
          className="shadow-sm image"
        />
      ) : (
        <video width="400" id={item.id} controls={false} muted loop className="image">
          <source src={item.videos["tiny"].url} type="video/mp4" />
        </video>
      )}
      <div
        className={`d-flex justify-content-between p-3 fw-bold position-absolute ${
          !isHover && type==="images" ? "bottom-30 d-none" : "bottom-0"
        } w-100`}
      >
        <div className="tags text-white">
          {item.tags.split(",").map((tag,i) => {
            return <span key={i}>{tag}</span>;
          })}
        </div>
        <div className="likes d-flex text-white">
          <span>
            <i className="bi bi-hand-thumbs-up"></i> {item.likes + " "}
          </span>
          <span>
            <i className="bi bi-chat"></i> {item.comments}
          </span>
        </div>
      </div>
    </div>
  );
}
