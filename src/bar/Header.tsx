import { Tab } from "../content/Content";
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
      {tab.icon ? (
        <img className="header-icon" src={tab.icon} alt={tab.id} />
      ) : (
        tab.name
      )}
    </button>
  );
};
