export default class  PortfolioService{
  static addToPortfolio(title: string, count: number, price: number ):void{
    let sum = count * price
    localStorage.setItem('lastSum', String(sum))
    if (localStorage.getItem(title)){
      sum += +localStorage.getItem(title)
    }
    localStorage.setItem(title, String(sum))
  }

  static deleteFromPortfolio(key): void{
    localStorage.removeItem(key)
    window.location.reload()
  }
}