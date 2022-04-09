import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../App";
import { TrollingModel } from "../../models";
import { Ground } from "../Ground";

interface IGameContext {
  removeTrolling?: (trolling: TrollingModel) => void;
}

export const GameContext = React.createContext<IGameContext>({});

const GameLayout = () => {
  const { socket } = useContext(AppContext);
  const [trollings, setTrollings] = useState<TrollingModel[]>([]);

  const removeTrolling = (trolling: TrollingModel) => {
    console.log("remove-trolling", trolling);
    socket?.emit("remove-trolling", trolling.id);
  };

  useEffect(() => {
    if (!socket) return;
    console.log("NEW SOCKET");

    const achievementListener = (achivement: any) => {
      console.log(achivement);
    };

    const newTrollingListener = (trolling: TrollingModel) => {
      console.log("new-trolling", trolling);
      setTrollings((prevTrollings) => [...prevTrollings, trolling]);
    };

    const updateTrollingListener = (trolling: TrollingModel) => {
      console.log("update-trolling", trolling);
      setTrollings((prevTrollings) =>
        [...prevTrollings].map((e) => (e.id === trolling.id ? trolling : e))
      );
    };

    socket.on("achievement", achievementListener);

    socket.on("new-trolling", newTrollingListener);
    socket.on("update-trolling", updateTrollingListener);

    return () => {
      socket.off("achievement", achievementListener);
      socket.off("new-trolling", newTrollingListener);
    };
  }, [socket]);

  return (
    <GameContext.Provider value={{ removeTrolling }}>
      <Ground trollings={trollings} />
    </GameContext.Provider>
  );
};

export default GameLayout;
