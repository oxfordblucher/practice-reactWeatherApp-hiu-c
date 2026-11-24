import { useEffect, useRef, useState } from "react"

export default function CityForecast({selected}) {
  const [data, setData] = useState({})
  const details = useRef();

  const goToDetails = () => {
    window.scrollTo({
      top: details.current.offsetTop,
      behavior: 'smooth'
    })
  }

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
    <>
      <div className="city-forecast">
        <h2>Summary</h2>
        <p>{data['summary']}</p>
        <button onClick={() => goToDetails()}>View Details</button>
      </div>
      <div ref={details}>
        <h2>Details</h2>
        <p>{data['details']}</p>
      </div>
    </>
  )
}