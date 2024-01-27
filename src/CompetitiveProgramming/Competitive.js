import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { dataLeetcode } from "./data/dataLeetcode";
import { dataCodeforces } from "./data/dataCodeforces";
import { dataCodechef } from "./data/dataCodechef";
import { dataAtcoder } from "./data/dataAtcoder";
import Card from "./Card";

const Competitive = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const components = [
    "Competitive Programming",
    "Competitive Programming",
    "Competitive Programming",
    "Competitive Programming",
  ];
  const dataItem = [dataLeetcode, dataCodeforces, dataCodechef, dataAtcoder];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % components.length);
    }, 5000);

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, [components.length]);

  return (
    <div id="competitive">
      <Card title={components[currentIndex]} items={dataItem[currentIndex]} />
    </div>
  );
};

export default Competitive;
