import React, { useState, useEffect, useRef } from "react"
import cn from "classnames"
import styles from "./Movies.module.scss"

export function Movies({ getMovies }) {
  const [movies, setMovies] = useState()
  const [imgLoaded, setImgLoaded] = useState(false)

  const imageRef = useRef(null)

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

  useEffect(() => {
    if (imageRef.current) {
      imageRef.current.onload = () => setImgLoaded(true)
    }
  }, [movies])

  return (
    <>
      <h1 className={styles.title}>Best recent films</h1>
      <div className={styles.grid}>
        {movies &&
          movies.map((movie) => (
            <div key={movie.filmId}>
              <div className={styles.movieTitle}>
                <p className={styles.movieName}>{movie.nameRu}</p>
              </div>
              <hr />
              <div className={styles.cell}>
                <div className={styles.ratingBox}>
                  <p className={styles.movieRating}>{movie.rating}</p>
                </div>
                <img
                  ref={imageRef}
                  src={movie.posterUrl}
                  className={cn(styles.image, {
                    [styles.imageLoaded]: imgLoaded,
                  })}
                />
              </div>
            </div>
          ))}
      </div>
    </>
  )
}
