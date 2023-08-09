export interface ICoinTableElement{
  id: string;
  num: number, 
  name: string,
  price: string | number,
  hour?: string,
  day: string,
  volume: string,
  capitalization: string,
  symbol: string
}