import React, { useContext } from "react";
import { GameContext } from "../GameLayout/GameLayout";
import { Quest } from "../Quest";
import * as S from "./styles";

const Header = () => {
  const { quest, player } = useContext(GameContext);

  return (
    <>
      <S.TopBar>
        <S.h1>Trollings dugeon</S.h1>
        {player && (
          <div>
            <p>Title: {player?.title?.name}</p>
            <small style={{ color: "#595757" }}>
              {player.title?.description}
            </small>
            <p>Points: {player?.points}</p>
          </div>
        )}
      </S.TopBar>
      <S.aside>
        <div>
          <S.h2>Quest</S.h2>
          {quest && <Quest quest={quest} />}
        </div>
      </S.aside>
    </>
  );
};

export default Header;
