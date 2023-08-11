import { ICoinPriceHistory } from '@/pages/CoinInfo/CoinInfoPage.types';
import { useEffect, useMemo, useState } from 'react';
import {
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Area,
  AreaChart
} from 'recharts'
import { IChart } from './Chart.types';
import moment from 'moment';

function Chart(props: IChart) {
  const [priceHistory, setPriceHistory] = useState<ICoinPriceHistory[]>([])
  const priceArray = []

  useEffect(() => {
    setPriceHistory(props.data.slice(-24))
  }, [props.data]) 

  priceHistory.forEach(item => priceArray.push(+item.priceUsd))
  const modifiedPriceHistory = useMemo(() => priceHistory.map(item => {
    return {...item, date: moment(item.date).format('hh:mm:ss')}
  }), [priceHistory])

  return (
    <ResponsiveContainer
      width="100%"
      height={400}
      >
      <AreaChart
        data={modifiedPriceHistory}
        margin={{
          top:10,
          left:20,
          right:20,
          bottom:10
        }}
        >
          <defs>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <XAxis dataKey="date"/>
          <YAxis dataKey="priceUsd" domain={[Math.floor(Math.min(...priceArray)), Math.ceil(Math.max(...priceArray))]}/>
          <Tooltip />
          <Area type="monotone" dataKey="priceUsd" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
          <Bar dataKey="priceUsd" fill='#88bc90'/>
          <Bar dataKey="time" fill='#777a92'/>
      </AreaChart>
    </ResponsiveContainer>
  )
}

export default Chart;