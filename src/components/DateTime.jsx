import { useState, useEffect } from "react"

const DateTime = () => {
  const [dateTime, setDateTime] = useState(new Date())

  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(new Date())
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  const formatted = dateTime.toLocaleString("en-US", {
    weekday: "short",   // Wed
    month: "short",     // Jan
    day: "numeric",     // 7
    hour: "numeric",    // 12
    minute: "2-digit",  // 21
    hour12: true,       // PM
  }).replace(/,/g,"")//g measn global so it remove all ,

  return <div>{formatted}</div>
}

export default DateTime