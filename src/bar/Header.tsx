import { Tab } from "../tabs/Tab";
import "./Header.css";

export const Header = ({
  tab,
  active,
  onChange,
}: {
  tab: Tab;
  active: boolean;
  onChange: () => void;
}) => {
  return (
    <button onClick={onChange} className={`header${active ? " active" : ""}`}>
      {tab.icon ? <img src={tab.icon} alt={tab.id} /> : tab.name}
    </button>
  );
};
