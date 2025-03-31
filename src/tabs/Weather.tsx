import { useEffect } from "react";
import "./Weather.css";

export const Weather = () => {
  useEffect(() => {
    const interval = setInterval(() => {
      const iframe = document.getElementById(
        "weather-iframe"
      ) as HTMLIFrameElement | null;

      if (iframe) {
        iframe.src += "";
      }
      console.log("running");
    }, 300000);
    return () => clearInterval(interval);
  });

  return (
    <iframe
      className="weather"
      id="weather-iframe"
      title="wetter"
      src="https://www.wetterstation-wohlen.ch"
    />
  );
};
