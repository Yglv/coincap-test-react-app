import { useState } from 'react'
import './App.scss'
import MainMenu from '@/pages/MainMenu/MainMenuPage'
import  {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom'
import CoinInfo from './pages/CoinInfo/CoinInfoPage'

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<MainMenu/>}/>
          <Route path="/info" element={<CoinInfo/>}/>
        </Routes>
      </div>
    </Router>
  )
}

export default App
