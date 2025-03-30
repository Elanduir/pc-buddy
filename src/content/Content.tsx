import { useState } from "react";
import { Weather } from "../tabs/Weather";
import "./Content.css";
import { TabBar } from "../bar/TabBar";
import { Tab } from "../tabs/Tab";
import wsIcon from "../res/icon/ws_wohlen.png";
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
    name: "hue",
    node: <Hue />,
    icon: bulbIcon,
  },
];

export const Content = () => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div className="pc-buddy">
      <div className="app-bar">
        <p>
          <strong>PC-Buddy </strong>
          {tabs[activeTab].name}
        </p>
      </div>
      <div className="content">
        <TabBar tabs={tabs} active={activeTab} onChange={setActiveTab} />
        <div className="content-tab">{tabs[activeTab].node}</div>
      </div>
    </div>
  );
};
