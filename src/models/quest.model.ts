import { TrollingModel } from "./trolling.model";

export interface QuestModel {
  id: number | string;
  name: string;
  description: string;
  reward?: number | Function; // points
  time?: number; // milliseconds
  state: "completed" | "uncompleted" | "failed";
  trollings: TrollingModel[];
}
