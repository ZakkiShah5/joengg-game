import { createContext, useContext, useState, useEffect } from "react";

const MuteContext = createContext();

export const MuteProvider = ({ children }) => {
  const [volume, setVolume] = useState(() => {
    return localStorage.getItem("volume") === "true";
  });

  useEffect(() => {
    localStorage.setItem("volume", volume);
  }, [volume]);

  return (
    <MuteContext.Provider value={{ volume, setVolume }}>
      {children}
    </MuteContext.Provider>
  );
};

export const useMute = () => useContext(MuteContext);
