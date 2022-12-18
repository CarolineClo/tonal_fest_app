import React from "react";
import { useParams } from "react-router-dom";
import Notfav from "./Notfav";
import Favheart from "./Favheart";
const url = "http://localhost:8080/";

function BandDetails(props) {
  const { id } = useParams();
  let bands = props.bands;
  let slots = props.slots;

  const thisBand = bands.find((band) => {
    if (band.id == id) {
      return band;
    }
  });
  const slot = slots[thisBand.name];
  const bandMembers = thisBand.members.join(", ");
  let bandImage = thisBand.logo;
  let bandLogo;
  if (bandImage.includes("https")) {
    bandLogo = bandImage;
  } else {
    bandLogo = url + "logos/" + bandImage;
  }

  // let component = <Notfav toggleFav={props.toggleFav} index={slot.index} />;
  // if (slot.fav == true) {
  //   component = <Favheart toggleFav={props.toggleFav} index={slot.index} />;
  // }

  return (
    <div className="bandDetails">
      <div className="imageCircle">
        <img src={bandLogo} alt="" />
      </div>
      <div className="bandInfo">
        <h2 className="name">{thisBand.name}</h2>
        <div className="bandSlot">
          <h4 className="day"> {slot.day}</h4>
          <p>
            {slot.start} - {slot.end}
          </p>
          <h4>{slot.stage}</h4>
        </div>
        <p>{thisBand.bio}</p>
        <p>
          <strong>Band members:</strong> {bandMembers}
        </p>
        {/* {component} */}
      </div>
    </div>
  );
}

export default BandDetails;
