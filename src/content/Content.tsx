import { ReactNode, useState } from "react";
import { Weather } from "../tabs/Weather";
import "./Content.css";
import { TabBar } from "../bar/TabBar";
import wsIcon from "../res/icon/weather.svg";
import bulbIcon from "../res/icon/bulb.png";
import glattalpIcon from "../res/icon/glattalp.svg";
import { Hue } from "../tabs/Hue";
import { Glattalp } from "../tabs/Glattalp";

export type Tab = {
  id: string;
  name: string;
  node: ReactNode;
  icon?: string;
};

const tabs: Tab[] = [
  {
    id: "weather",
    name: "Weather",
    node: <Weather />,
    icon: wsIcon,
  },
  {
    id: "glattalp",
    name: "Glattalp Webcam",
    node: <Glattalp />,
    icon: glattalpIcon,
  },
  {
    id: "hue",
    name: "Light Control",
    node: <Hue />,
    icon: bulbIcon,
  },
];

export const Content = () => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <>
      <div className="app-bar">
        <div className="app-bar-icon"></div>
        <p className="app-bar-title">
          <strong>PC-Buddy </strong>
          <span className="accent-color">{tabs[activeTab].name}</span>
        </p>
      </div>
      <div className="content">
        <TabBar tabs={tabs} active={activeTab} onChange={setActiveTab} />
        <div className="content-tab">{tabs[activeTab].node}</div>
      </div>
    </>
  );
};
