import React from "react";
import ActListCard from "./ActListCard";
import { Link } from "react-router-dom";
let i = 1;

function ActList(props) {
  const slotsByName = props.slots;
  let bands = props.bands;
  bands.sort((a, b) => {
    if (a.name > b.name) {
      return 1;
    }
    if (a.name < b.name) {
      return -1;
    }
    return 0;
  });

  if (bands === undefined) {
    return <div>...</div>;
  }

  if (slotsByName === undefined) {
    return <div>...</div>;
  }

  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  return (
    <div className="actList">
      <h1> Acts</h1>

      {alphabet.map((letter) => {
        return (
          <div className="listOfActs" key={i++}>
            <h3 className="letter">{letter}</h3>
            {bands.map((band) => {
              if (band.name.charAt(0) === letter)
                return (
                  <div key={i++}>
                    <Link to={`/acts/${band.id}`} key={band.id}>
                      <ActListCard data={band} slot={slotsByName[band.name]} key={band.id} />
                    </Link>
                  </div>
                );
            })}
          </div>
        );
      })}
    </div>
  );
}

export default ActList;
