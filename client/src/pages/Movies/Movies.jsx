import React, { useState, useEffect, useLayoutEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { fetchFilms, sortFilms } from "../../store/features/loadedFilmsSlice"
import { SortDropdown } from "../../components/SortDropdown"
import { MovieCard } from "../../components/MovieCard"
import { SearchField } from "../../components/SearchField"
import styles from "./Movies.module.scss"

export function Movies() {
  const [sortFilter, setSortFilter] = useState("release date")

  const dispatch = useDispatch()

  const {
    films: { filtered: filteredFilms },
    error,
  } = useSelector((state) => state.loadedFilms)

  useLayoutEffect(() => {
    if (!filteredFilms.length) {
      dispatch(fetchFilms())
    }
  }, [])

  useLayoutEffect(() => {
    dispatch(sortFilms({ sortFilter }))
  }, [sortFilter])

  return (
    <>
      <h1 className={styles.title}>Best recent films</h1>
      <div className={styles.controlsContainer}>
        <SearchField />
        <SortDropdown setSortFilter={setSortFilter} />
      </div>
      <div className={styles.grid}>
        {filteredFilms && error ? (
          <p>{error}</p>
        ) : (
          filteredFilms.map((film) => (
            <MovieCard
              key={film.filmId}
              filmId={film.filmId}
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
