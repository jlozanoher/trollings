import React from "react";
import * as S from "./styles";

interface Props {
  onRestart: () => void;
}

const GameOverPage = ({ onRestart }: Props) => {
  return (
    <S.section>
      <h2>Game over</h2>
      <h4>Thank you for testing this app.</h4>
      <summary>
        <p>Feel free to contact me if you have any questions.</p>
        <p>José Lozano Hernández</p>
        <p>
          <a
            href="mailto: jlozanoher@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            jlozanoher@gmail.com
          </a>
        </p>

        <p>
          <a
            href="https://github.com/jlozanoher/"
            target="_blank"
            rel="noreferrer"
          >
            https://github.com/jlozanoher/
          </a>
        </p>
      </summary>
      <S.button onClick={() => onRestart()}>Restart</S.button>
    </S.section>
  );
};

export default GameOverPage;
