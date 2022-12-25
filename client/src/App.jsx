import React, { useState } from "react"

export default function App() {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)

  const getMovies = () => {
    setLoading(true)
    fetch("http://localhost:3001/api/movies")
      .then((res) => res.json())
      .then((data) => {
        setLoading(false)
        setMovies(data)
      })
  }

  return (
    <>
      <h1>Movies List:</h1>
      <button onClick={getMovies}>Get Movies</button>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {movies.map((movie) => (
            <li key={movie._id}>{movie.title}</li>
          ))}
        </ul>
      )}
    </>
  )
}
