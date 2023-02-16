import React, { useState, useEffect } from "react"
import { MovieCard } from "../../components/MovieCard"
import styles from "./Movies.module.scss"

export function Movies({ getMovies }) {
  const [movies, setMovies] = useState()

  const loadMovies = async () => {
    const resData = await getMovies()
    setMovies(resData)
  }

  useEffect(() => {
    try {
      loadMovies()
    } catch (error) {
      console.log(error)
    }
  }, [])

  return (
    <>
      <h1 className={styles.title}>Best recent films</h1>
      <div className={styles.grid}>
        {movies &&
          movies.map((movie) => (
            <MovieCard
              key={movie.filmId}
              nameRu={movie.nameRu}
              rating={movie.rating}
              posterUrl={movie.posterUrl}
            />
          ))}
      </div>
    </>
  )
}
