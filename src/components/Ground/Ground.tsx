import React from "react";
import { TrollingModel } from "../../models";
import { Trolling } from "../Trolling";
import * as S from "./styles";

interface Props {
  trollings: TrollingModel[];
}

const Ground = (props: Props) => {
  const { trollings } = props;

  return (
    <S.Cointainer>
      {trollings.map((e) => (
        <Trolling key={e.id} trolling={e} />
      ))}
    </S.Cointainer>
  );
};

export default Ground;
