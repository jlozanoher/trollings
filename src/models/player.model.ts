export interface PlayerModel {
  points: number;
  title?: TitleModel;
}

export interface TitleModel {
  name: string;
  description: string;
}
