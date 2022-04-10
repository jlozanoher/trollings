import { useCallback, useEffect, useState } from "react";
import { Socket } from "socket.io-client";
import { QuestModel, TrollingModel } from "../models";

interface Props {
  socket?: Socket;
}

export const useGameLogic = ({ socket }: Props) => {
  const [trollings, setTrollings] = useState<TrollingModel[]>([]);
  const [quest, setQuest] = useState<QuestModel | undefined>();

  const removeTrolling = useCallback(
    (trolling: TrollingModel) => {
      console.log("remove-trolling", trolling);
      socket?.emit("remove-trolling", trolling.id);
    },
    [socket]
  );

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

    const newQuestListener = (quest: QuestModel) => {
      console.log("new-quest", quest);
      setQuest(quest);
      setTrollings(quest.trollings || []);
    };

    const updateQuestListener = (updatedQuest: QuestModel) => {
      console.log("update-quest", updatedQuest);
      setQuest((quest) => ({ ...quest, ...updatedQuest }));
    };

    socket.on("achievement", achievementListener);

    socket.on("new-trolling", newTrollingListener);
    socket.on("update-trolling", updateTrollingListener);
    socket.on("new-quest", newQuestListener);
    socket.on("update-quest", updateQuestListener);

    return () => {
      socket.off("achievement", achievementListener);
      socket.off("new-trolling", newTrollingListener);
    };
  }, [socket]);

  return { trollings, quest, removeTrolling };
};
