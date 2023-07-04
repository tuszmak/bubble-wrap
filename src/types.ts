export interface IPlaygroundSize {
    width: number;
    height: number;
  }
export interface IGameProps {
  size: IPlaygroundSize,
  gameOver: ()=>void
}