import React, { useContext } from "react";
import styled from "styled-components";
import { GameContext } from "../GameLayout/GameLayout";
import { Quest } from "../Quest";
import * as S from "./styles";

const Header = () => {
  const { quest } = useContext(GameContext);

  return (
    <S.header>
      <S.h1>Trollings dugeon</S.h1>
      <div>
        <S.h2>Quest</S.h2>
        {quest && <Quest quest={quest} />}
      </div>
    </S.header>
  );
};

export default Header;
