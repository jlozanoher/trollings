import React, { useEffect, useState } from "react";
import io, { Socket } from "socket.io-client";
import { GameLayout } from "./components/GameLayout";

interface IAppContext {
  socket?: Socket;
}

export const AppContext = React.createContext<IAppContext>({});

function App() {
  const [socket, setSocket] = useState<any>(null);

  useEffect(() => {
    const newSocket = io(`http://127.0.0.1:1337`);
    setSocket(newSocket);
    return () => {
      newSocket.close();
    };
  }, [setSocket]);

  return (
    <AppContext.Provider value={{ socket }}>
      <GameLayout />
    </AppContext.Provider>
  );
}

export default App;
