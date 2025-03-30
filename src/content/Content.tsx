import { useState } from "react";
import { Weather } from "../tabs/Weather";
import "./Content.css";
import { TabBar } from "../bar/TabBar";
import { Tab } from "../tabs/Tab";
import wsIcon from "../res/icon/weather.svg";
import bulbIcon from "../res/icon/bulb.png";
import { Hue } from "../tabs/Hue";

const tabs: Tab[] = [
  {
    id: "weather",
    name: "Weather",
    node: <Weather />,
    icon: wsIcon,
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
    <div className="pc-buddy">
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
    </div>
  );
};
