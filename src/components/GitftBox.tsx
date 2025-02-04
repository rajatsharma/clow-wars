import React from "react";
import { prizes } from "../resources";

const GiftBox = ({
  title,
  bikes,
  mobiles,
  movieTickets,
  emptyText,
  titleClass,
}: any) => (
  <div className="gifts">
    <p className={titleClass}>{title}</p>
    {!!movieTickets && (
      <div className="gift-card">
        <img
          src={prizes["Movie Ticket"]}
          height="50px"
          className="prize-icon"
          alt={"Movie Ticket"}
        />
        <p className="prize-text">Movie Tickets</p>
        <p className="prize-count">{movieTickets}</p>
      </div>
    )}
    {!!mobiles && (
      <div className="gift-card">
        <img
          src={prizes.Mobile}
          height="50px"
          className="prize-icon mobile"
          alt="Mobile"
        />
        <p className="prize-text">Mobiles</p>
        <p className="prize-count">{mobiles}</p>
      </div>
    )}
    {!!bikes && (
      <div className="gift-card">
        <img
          src={prizes.Bike}
          height="50px"
          className="prize-icon"
          alt="Bike"
        />
        <p className="prize-text">Bike</p>
        <p className="prize-count">{bikes}</p>
      </div>
    )}
    {!bikes && !movieTickets && !mobiles && (
      <p className="intro-text">{emptyText}</p>
    )}
  </div>
);

export default GiftBox;
