import React, { useState, useEffect } from "react"
import { SortDropdown } from "../../components/SortDropdown"
import { MovieCard } from "../../components/MovieCard"
import styles from "./Movies.module.scss"

export function Movies({ getMovies }) {
  const [movies, setMovies] = useState([])

  const [sortFilter, setSortFilter] = useState("release date")

  const loadMovies = async () => {
    const resData = await getMovies()

    resData.sort((a, b) => Number(b.year) - Number(a.year))

    setMovies(resData)
  }

  useEffect(() => {
    try {
      loadMovies()
    } catch (error) {
      console.log(error)
    }
  }, [])

  useEffect(() => {
    const sortingArr = movies.slice()

    switch (sortFilter) {
      case "rating":
        sortingArr.sort((a, b) => Number(b.rating) - Number(a.rating))
        setMovies(sortingArr)
        break
      case "popularity":
        sortingArr.sort((a, b) => b.ratingVoteCount - a.ratingVoteCount)
        setMovies(sortingArr)
        break
      default:
        sortingArr.sort((a, b) => Number(b.year) - Number(a.year))
        setMovies(sortingArr)
    }
  }, [sortFilter])

  return (
    <>
      <h1 className={styles.title}>Best recent films</h1>
      <div className={styles.sortBtnContainer}>
        <SortDropdown setSortFilter={setSortFilter} />
      </div>
      <div className={styles.grid}>
        {movies.map((movie) => (
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
