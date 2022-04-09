import React, { useContext, useEffect, useRef, useState } from "react";
import { Position, TrollingModel } from "../../models";
import * as S from "./styles";
import Orc from "./orc.gif";
import Princess from "./princess.gif";
import Troll from "./troll.webp";
import { GameContext } from "../GameLayout/GameLayout";

interface Props {
  trolling: TrollingModel;
}

const generateRandomFromInitial = (e: number) =>
  Math.max(
    0,
    Math.min(
      90,
      e +
        Math.random() * 5 * (Math.ceil((Math.random() - 0.5) * 2) < 1 ? -1 : 1)
    )
  );

const Trolling = (props: Props) => {
  const { trolling } = props;
  const [pos, setPos] = useState<Position>(trolling.position);
  const timeoutId = useRef<any>();

  const { removeTrolling = () => {} } = useContext(GameContext);

  useEffect(() => {
    if (trolling.state === "alive") {
      changePos();
    }

    return () => {
      clearInterval(timeoutId.current);
    };
  }, [trolling]);

  const changePos = () => {
    timeoutId.current = setInterval(() => {
      const nPos: Position = {
        x:
          generateRandomFromInitial(+`${trolling.position.x}`.split("%")[0]) +
          "%",
        y:
          generateRandomFromInitial(+`${trolling.position.y}`.split("%")[0]) +
          "%",
      };
      setPos(nPos);
    }, 1000);
  };

  const handleClick = () => {
    console.log(`Clicked on ${trolling.id}`);
    removeTrolling(trolling);
  };

  let src = Orc;
  if (trolling.type === "troll") {
    src = Troll;
  }
  if (trolling.type === "princess") {
    src = Princess;
  }

  return (
    <S.Cointainer
      style={{
        left: pos.x,
        top: pos.y,
        filter: trolling.state === "dead" ? "grayscale(1)" : "none",
      }}
      onClick={handleClick}
    >
      <img src={src} alt="creature" width={50} />
      {/* {`I'm a ${trolling.type} trolling`} */}
    </S.Cointainer>
  );
};

export default Trolling;
