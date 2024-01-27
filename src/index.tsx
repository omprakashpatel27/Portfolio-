import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
import About from "./About/About";
import Competitive from "./CompetitiveProgramming/Competitive";
import TechStack from "./TechStack/TechStack";
import Navbar from "./Navbar/Navbar";
import Article from "./Article/Article";
import Project from "./Project/Project";
import { article01, article02 } from "./Article/data/dataArticle.js";

const rootElement = document.getElementById("root")!;
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Navbar />
    <About />
    <Competitive />
    <TechStack />
    <Project article01={article01} article02={article02} />
    <Article article01={article01} article02={article02} />
  </React.StrictMode>
);
