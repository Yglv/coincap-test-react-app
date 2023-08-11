export interface IPagination{
  coinsPerPage: number,
  totalCoins: number,
  paginate(page: number): void
}