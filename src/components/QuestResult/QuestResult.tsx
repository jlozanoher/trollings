import React from "react";
import { QuestModel } from "../../models";
import * as S from "./style";

interface Props {
  quest?: QuestModel;
}

const QuestResult = ({ quest }: Props) => {
  return (
    <S.Container>
      <S.Wrapper>
        <S.TextContainer>
          <S.h1>Quest {quest?.state}</S.h1>
        </S.TextContainer>
      </S.Wrapper>
    </S.Container>
  );
};

export default QuestResult;
