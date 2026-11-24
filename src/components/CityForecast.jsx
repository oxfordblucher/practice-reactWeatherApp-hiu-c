import { useEffect, useState } from "react"

export default function CityForecast({selected}) {
  const [data, setData] = useState({})

  useEffect(() => {
    const fetchForecast = async () => {
      try {
        const res = await fetch('/weatherData.json')
        if (!res.ok) {
          throw new Error(`HTTP error: ${res.status}`)
        }
        const json = await res.json()
        setData(json[selected] ?? {})
      } catch (err) {

      }
    }

    fetchForecast()
  }, [selected])

  return (
    <div>
      {Object.entries(data).map(([key, value]) => (
        <p key={key}><span>{key}:</span><span>{value}</span></p>
      ))}
    </div>
  )
}