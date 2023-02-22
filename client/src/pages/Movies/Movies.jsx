import React, { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { fetchFilms, sortFilms } from "../../store/features/loadedFilmsSlice"
import { SortDropdown } from "../../components/SortDropdown"
import { MovieCard } from "../../components/MovieCard"
import styles from "./Movies.module.scss"

export function Movies() {
  const [sortFilter, setSortFilter] = useState("release date")

  const dispatch = useDispatch()

  const { films, error } = useSelector((state) => state.loadedFilms)

  useEffect(() => {
    if (!films) {
      dispatch(fetchFilms())
    }
  }, [])

  useEffect(() => {
    dispatch(sortFilms({ sortFilter }))
  }, [sortFilter])

  return (
    <>
      <h1 className={styles.title}>Best recent films</h1>
      <div className={styles.sortBtnContainer}>
        <SortDropdown setSortFilter={setSortFilter} />
      </div>
      <div className={styles.grid}>
        {films && error ? (
          <p>{error}</p>
        ) : (
          films.map((film) => (
            <MovieCard
              key={film.filmId}
              nameRu={film.nameRu}
              rating={film.rating}
              posterUrl={film.posterUrl}
            />
          ))
        )}
      </div>
    </>
  )
}
