import { GameContext } from "../components/GameLayout/GameLayout";
import { PlayerModel, QuestModel } from "../models";

interface Props {
  children: any;
}

export const questTest: QuestModel = {
  id: 0,
  name: "Test Quest",
  description: "Test quest description",
  state: "uncompleted",
  reward: 50,
  trollings: [
    {
      id: 0,
      position: {
        x: "10%",
        y: "10%",
      },
      state: "alive",
      type: "orc",
    },
    {
      id: 1,
      position: {
        x: "20%",
        y: "20%",
      },
      state: "alive",
      type: "troll",
    },
    {
      id: 2,
      position: {
        x: "30%",
        y: "30%",
      },
      state: "alive",
      type: "princess",
    },
  ],
};

export const playerTest: PlayerModel = {
  title: {
    name: "Player title test",
    description: "Player title test description",
  },
  points: 0,
};

export const WithGameContext = ({ children }: Props) => (
  <GameContext.Provider value={{ quest: questTest, player: playerTest }}>
    {children}
  </GameContext.Provider>
);
