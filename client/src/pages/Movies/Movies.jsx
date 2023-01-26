import React, { useState, useEffect } from "react"
import styles from "./Movies.module.scss"

export function Movies({ getMovies }) {
  const [movies, setMovies] = useState()

  useEffect(() => {
    const loadMovies = async () => {
      const movies = await getMovies()
      setMovies(movies)
    }

    try {
      loadMovies()
    } catch (error) {
      console.log(error)
    }
  }, [])

  return (
    <>
      <h1 className={styles.title}>List of films</h1>
      <div className={styles.grid}>
        {movies &&
          movies.map((movie) => (
            <div key={movie.filmId} className={styles.cell}>
              <img src={movie.posterUrl} className={styles.image} />
            </div>
          ))}
      </div>
    </>
  )
}
