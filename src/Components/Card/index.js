import * as React from "react";
import "./Card.css";
// import {Tooltip} from "@mui/material/Tooltip";
import Tooltip from "@mui/material/Tooltip";
import Button from "@mui/material/Button";
const Card = (props) => {
  // console.log(props.carddata);
  const cardsData = props.carddata;
  return (
    
      <div className="cs-section">
        {cardsData.map((carddata) => (
          <>
            <Tooltip
              title={`${carddata.songs.length} songs`}
              placement="top"
              arrow
              key={carddata.id}
            >
              <Button>
                <div className="card-wrapper">
                  <div className="card">
                    <div className="card-image-frame">
                      <img src={carddata.image} alt="album cover page" />
                    </div>
                    <div className="card-pill">
                      <p>{carddata.follows} Follows</p>
                    </div>
                  </div>
                  <p className="card-label">{carddata.title}</p>
                </div>
              </Button>
            </Tooltip>
          </>
        ))}
      </div>
    
  );
};

export default Card;
