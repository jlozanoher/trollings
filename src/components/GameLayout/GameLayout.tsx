import React, { useContext } from "react";
import { AppContext } from "../../App";
import { useGameLogic } from "../../hooks/useGameLogic";
import { PlayerModel, TrollingModel } from "../../models";
import { QuestModel } from "../../models/quest.model";
import { Ground } from "../Ground";
import Header from "../Header/Header";
import { QuestResult } from "../QuestResult";

interface IGameContext {
  removeTrolling?: (trolling: TrollingModel) => void;
  quest?: QuestModel;
  player?: PlayerModel;
}

export const GameContext = React.createContext<IGameContext>({});

const GameLayout = () => {
  const { socket } = useContext(AppContext);

  const { removeTrolling, quest, trollings, player } = useGameLogic({ socket });

  return (
    <GameContext.Provider value={{ removeTrolling, quest, player }}>
      {quest && quest?.state !== "uncompleted" && <QuestResult quest={quest} />}
      <Header />
      <Ground trollings={trollings} />
    </GameContext.Provider>
  );
};

export default GameLayout;
