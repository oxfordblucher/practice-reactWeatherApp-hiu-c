import { useEffect, useState } from "react"

export default function CityList({ selected, setCity }) {
  const [cities, setCities] = useState([])

  useEffect(() => {
    const fetchCities = async () => {
      try {
        const res = await fetch('/weatherData.json')
        if (!res.ok) {
          throw new Error(`HTTP error: ${res.status}`)
        }
        const json = await res.json()
        setCities(Object.keys(json))
      } catch (err) {

      }
    }
    fetchCities()
  }, [])


  return (
    <div className="city-list">
      <h2>What's the forecast for...</h2>
      {cities.map((city) => (
        <button key={city} onClick={() => setCity(city)} disabled={selected === city}>{city}</button>
      ))}
    </div>
  )
}