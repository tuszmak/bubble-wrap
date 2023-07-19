export interface IPlaygroundSize {
    width: number;
    height: number;
  }
export interface IGameProps {
  size: IPlaygroundSize,
  gameOver: ()=>void
}
export interface IPopProps{
  key: number,
  isHover: boolean
}