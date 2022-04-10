import React from "react";
import * as S from "./styles";

interface Props {
  onBegin: () => void;
}

const WelcomePage = ({ onBegin }: Props) => {
  return (
    <S.section>
      <h2>Welcome to test this app</h2>
      <ul>
        <li>Single page app built with React 18.</li>
        <li>The useState and Context provider is used for state management.</li>
        <li>Server side built with Node.js,Express.</li>
        <li>Communication via socket.io.</li>
      </ul>
      <S.button onClick={() => onBegin()}>Begin</S.button>
    </S.section>
  );
};

export default WelcomePage;
