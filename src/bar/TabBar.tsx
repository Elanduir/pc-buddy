import { useState } from "react";
import "./TabBar.css";
import { Tab } from "../tabs/Tab";
import { Header } from "./Header";

export const TabBar = ({
  tabs,
  active,
  onChange,
}: {
  tabs: Tab[];
  active: number;
  onChange: (activeNr: number) => void;
}) => {
  const [activeTab, setActiveTab] = useState(active);
  const updateActiveTab = (n: number) => {
    setActiveTab(n);
    onChange(n);
  };

  return (
    <div className="tab-bar">
      {tabs.map((t, i) => (
        <Header
          tab={t}
          active={tabs[activeTab].id === t.id}
          onChange={() => updateActiveTab(i)}
        />
      ))}
    </div>
  );
};
