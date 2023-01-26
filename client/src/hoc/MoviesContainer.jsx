import React from "react"
import axios from "axios"

export function MoviesContainer({ children }) {
  const getMovies = async () => {
    const res = await axios.get("http://localhost:3001/api", {
      headers: {
        "Content-Type": "application/json",
      },
    })

    return res.data
  }

  return React.cloneElement(children, {
    getMovies,
  })
}
