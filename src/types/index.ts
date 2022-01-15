export enum CellValue {
  bomb,
  one,
  two,
  three,
  four,
  five,
  six,
  seven,
  eight,
  none,
}

export enum CellState {
  open,
  visible,
  flagged,
}

export type Cell = { value: CellValue; state: CellState };
export enum Face {
  smile = "😎",
  oh = "😧",
  lost = "😵",
  won = "😍",
}
