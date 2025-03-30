// username: 5Nl6VaqzM1uojIwX6zPIilJLHvS9IVBNZJiOLX4j

import { useEffect, useState } from "react";
import "./Hue.css";
import brightnessLow from "../res/icon/sun_low.svg";
import brightnessMid from "../res/icon/sun_mid.svg";
import brightnessHigh from "../res/icon/sun_high.svg";
import minusIcon from "../res/icon/minus.svg";
import plusIcon from "../res/icon/plus.svg";
import onOffIcon from "../res/icon/on-off.svg";
import { IconButton } from "../components/Button";
import { useHueApi } from "../util/useHueApi";

const getUserFromParam = () => {
  const queryString = window.location.search;
  const params = new URLSearchParams(queryString);
  const user = params.get("hueUser");
  return user;
};

export const Hue = () => {
  const [bedrooms, setBedrooms] = useState<object[]>([]);
  const [user, setUser] = useState<string | null>(null);

  useEffect(() => {
    setUser(getUserFromParam());
  }, []);

  const { getAllBedrooms } = useHueApi(user);

  useEffect(() => {
    getAllBedrooms().then((r) => setBedrooms(r));
  }, [getAllBedrooms]);

  const error = user ? "Error fetching groups" : "Missing URL Param 'hueUser'";

  return (
    <div className="control-align">
      {bedrooms.length > 0 && (
        <div className="control-wrapper">
          {bedrooms.map((b) => (
            <Control room={b} user={user} />
          ))}
        </div>
      )}
      {bedrooms.length === 0 && error}
    </div>
  );
};

const Control = ({ room, user }: { room: any; user: string | null }) => {
  const {
    toggleLights,
    setBrightness,
    incBrightness,
    decBrightness,
    setSaturation,
  } = useHueApi(user);
  const id = room["id"];
  return (
    <div className="control-group">
      <p className="room-name">{room["name"]}</p>
      <div className="room-control-group">
        <div className="button-group left">
          <IconButton
            icon={brightnessHigh}
            onClick={() => setBrightness(254, id)}
          />
          <IconButton
            btnClassName="middle-left"
            icon={brightnessMid}
            onClick={() => setBrightness(150, id)}
          />
          <IconButton
            icon={brightnessLow}
            onClick={() => setBrightness(50, id)}
          />
        </div>
        <div className="button-group middle">
          <IconButton
            onClick={() => incBrightness(id)}
            icon={plusIcon}
            iconClassName="incr"
          />
          <IconButton
            onClick={() => decBrightness(id)}
            icon={minusIcon}
            iconClassName="incr"
          />
        </div>
        <div className="button-group right">
          <IconButton
            icon={brightnessHigh}
            onClick={() => setSaturation(0, id)}
          />
          <IconButton
            btnClassName="middle-right"
            icon={brightnessMid}
            onClick={() => setSaturation(150, id)}
          />
          <IconButton
            icon={brightnessLow}
            onClick={() => setSaturation(200, id)}
          />
        </div>
      </div>
      <div className="on-off-row">
        <IconButton icon={onOffIcon} onClick={() => toggleLights(id)} />
      </div>
    </div>
  );
};
