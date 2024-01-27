import React from "react";
import "./card.css";

import { useState, useRef } from "react";

const InternalCard = ({
  infoData,
  listData,
  heading,
  imgLink,
  profileLink,
}) => {
  return (
    <div className="card-container">
      <div className="inside-container-1">
        <img className="image-card" src={imgLink} />
      </div>

      <div className="inside-container-2">
        <div className="card-list-container">
          <h3 className="heading-inside">Platform : {heading}</h3>
          <p className="para-card-inside">{infoData}</p>
        </div>
        <div className="card-list-container">
          <h3 className="heading-inside">Best Ranks Achieved</h3>
          <ul className="card-list-inside">
            {listData.map((value, index) => (
              <li className="list-inside">{value}</li>
            ))}
          </ul>
        </div>
        <div className="button-outer-card">
          <a href={profileLink}>
            <button className="heading-button">Visit my Profile</button>
          </a>
        </div>
      </div>
    </div>
  );
};

const Card = ({ title, items }) => {
  return (
    <div className="card-container-outer">
      <div>
        <h3 className="heading-card">{title}</h3>
      </div>
      <div>
        <InternalCard
          infoData={items.infoData}
          heading={items.heading}
          imgLink={items.imgLink}
          listData={items.listData}
          profileLink={items.profileLink}
        />
      </div>
    </div>
  );
};

export default Card;
