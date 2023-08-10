import { ICoinData } from "@/components/tables/CoinTable/CoinTable.types";
import { ICoinInfoItems } from "./CoinInfoItems.types";

function CoinInfoItems(props: ICoinInfoItems){
  return (
    <>
      <div className="coininfo_header_item">
        <p className="coininfo_header_item_name">Рыночная капитализация</p>
        <p className="coininfo_header_item_num">${Intl.NumberFormat("ru-Ru").format(+Number(props.coinData.priceUsd).toFixed(2))}</p>
      </div>
      <div className="coininfo_header_item">
        <p className="coininfo_header_item_name">Объём торгов за 24 часа</p>
        <p className="coininfo_header_item_num">${Intl.NumberFormat("ru-Ru").format(+Number(props.coinData.volumeUsd24Hr).toFixed(0))}</p>
      </div>
      <div className="coininfo_header_item">
        <p className="coininfo_header_item_name">В обращении</p>
        <p className="coininfo_header_item_num">${Intl.NumberFormat("ru-Ru").format(+Number(props.coinData.supply).toFixed(0))}</p>
      </div>
      <div className="coininfo_header_item">
        <p className="coininfo_header_item_name">Максимальный объём</p>
        <p className="coininfo_header_item_num">${Intl.NumberFormat("ru-Ru").format(+Number(props.coinData.maxSupply).toFixed(0))}</p>
      </div>
      <div className="coininfo_header_item">
        <p className="coininfo_header_item_name">Ликвидность(24ч)</p>
        <p className="coininfo_header_item_num">{Intl.NumberFormat("ru-Ru").format(+Number(props.coinData.changePercent24Hr).toFixed(2))}%</p>
      </div>
    </>
  )

}

export default CoinInfoItems