import { Position } from "./commons.model";

export type TrollingType = "orc" | "troll" | "princess";
export type TrollingState = "alive" | "dead";

export interface TrollingModel {
  id: string | number;
  type: TrollingType;
  position: Position;
  state: TrollingState;
}
