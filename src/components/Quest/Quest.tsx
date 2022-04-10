import cs from "classnames";
import React from "react";
import { QuestModel } from "../../models/quest.model";
import * as S from "./styles";

interface Props {
  quest: QuestModel;
}

const Quest = (props: Props) => {
  const { quest } = props;

  return (
    <S.article
      className={cs({
        completed: quest.state === "completed",
        uncompleted: quest.state === "uncompleted",
        failed: quest.state === "failed",
      })}
    >
      <h3>{quest.name}</h3>
      <summary>{quest.description}</summary>
      <S.info>
        <b>Time: </b>
        {quest.time ? `${quest.time / 1000} seconds` : "Indefinitely"}
      </S.info>
      <S.info>
        <b>Reward: </b>
        {quest.reward}
      </S.info>
      <S.info>
        <b>Quest state: </b>
        {quest.state}
      </S.info>
    </S.article>
  );
};

export default Quest;
