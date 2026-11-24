import { useState } from 'react'
import './App.css'
import CityForecast from './components/CityForecast'
import CityList from './components/CityList'

function App() {
  const [city, setCity] = useState("")

  return (
    <>
      <CityList selected={city} setCity={setCity} />
      <CityForecast selected={city} />
    </>
  )
}

export default App
