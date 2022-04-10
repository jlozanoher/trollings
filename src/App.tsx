import React, { useEffect, useState } from "react";
import io, { Socket } from "socket.io-client";
import { GameLayout } from "./components/GameLayout";
import { GameOverPage } from "./components/GameOverPage";
import WelcomePage from "./components/WelcomePage/WelcomePage";

interface IAppContext {
  socket?: Socket;
}

export const AppContext = React.createContext<IAppContext>({});

function App() {
  const [socket, setSocket] = useState<Socket | undefined>(undefined);

  const [welcome, setWelcome] = useState(true);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    const url =
      process.env.NODE_ENV === "test"
        ? ""
        : process.env.REACT_APP_SERVER_URL || "";

    const newSocket = io(url);

    newSocket.on("game-over", () => {
      setGameOver(true);
    });

    setSocket(newSocket);
    return () => {
      newSocket.close();
    };
  }, []);

  const handleBegin = () => {
    setWelcome(false);
    setGameOver(false);
    socket?.emit("new-game");
  };

  return (
    <AppContext.Provider value={{ socket }}>
      {welcome ? (
        <WelcomePage onBegin={handleBegin} />
      ) : !gameOver ? (
        <GameLayout />
      ) : (
        <GameOverPage onRestart={handleBegin} />
      )}
    </AppContext.Provider>
  );
}

export default App;
