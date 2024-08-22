import React, { useState } from "react";
import {
  InferenceContext,
  InferenceResult,
  PhotoCollector,
} from "landingai-react";
import "./App.css"; 

const apiInfo = {
  endpoint:
    "https://predict.app.landing.ai/inference/v1/predict?endpoint_id=1d796cd5-9401-41dc-9ec2-241addd30b46",
  key: "land_sk_nZlmZQ8ANxligKGncNhsFOZ0S9kkLDG5bBHzLLu8mF4rdMkWwd",
};

export default function App() {
  const [images, setImages] = useState([]);

  const handleSetImage = (newImage) => {
    setImages((prevImages) => [...prevImages, newImage]);
  };

  return (
    <InferenceContext.Provider value={apiInfo} >
    <div className="top">
      <h1 className="heading">Gaze Direction Classifier</h1>
      </div>
      <PhotoCollector
        setImage={handleSetImage}
        style={{
          border: "2px solid blue",
          padding: "10px",
          borderRadius: "5px",
        }}
      />

      {images.map((image, index) => (
        <InferenceResult
          key={index}
          image={image}
          className="inference-result-image" 
        />
      ))}
      <footer>@swayam_aggarwal</footer>
    </InferenceContext.Provider>
  );
}
