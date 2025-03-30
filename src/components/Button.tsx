import "./Button.css";

export const Button = () => <button>placeholder</button>;

export const IconButton = ({
  icon,
  onClick,
  btnClassName,
  iconClassName,
}: {
  icon: string;
  onClick: (value?: any) => void;
  btnClassName?: string;
  iconClassName?: string;
}) => {
  return (
    <button
      className={`icon-button${btnClassName ? " " + btnClassName : ""}`}
      onClick={onClick}
    >
      <img
        className={`button-icon${iconClassName ? " " + iconClassName : ""}`}
        src={icon}
        alt="icon-button"
      />
    </button>
  );
};
