import { useState } from "react";
import { Weather } from "../tabs/Weather";
import "./Content.css";
import { TabBar } from "../bar/TabBar";
import { Tab } from "../tabs/Tab";
import { Spotify } from "../tabs/Spotify";
import wsIcon from "../res/icon/ws_wohlen.png";

const tabs: Tab[] = [
  {
    id: "weather",
    name: "weather",
    node: <Weather />,
    icon: wsIcon,
  },
  {
    id: "spotify",
    name: "spotify",
    node: <Spotify />,
  },
];

export const Content = () => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div className="content">
      <TabBar tabs={tabs} active={activeTab} onChange={setActiveTab} />
      {tabs[activeTab].node}
    </div>
  );
};
