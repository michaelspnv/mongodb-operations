import React from "react"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import styles from "./Film.module.scss"

export function Film() {
  const { filmId } = useParams()

  const { filtered } = useSelector((state) => state.loadedFilms.films)

  const currentFilm = filtered.find((film) => film.filmId === +filmId)

  const { nameRu, genres, filmLength, year, rating, posterUrl } = currentFilm

  const getFilmLenInMins = (filmLenInHours) => {
    const hours = Number(filmLenInHours.charAt(1))
    const minutes = Number(filmLenInHours.slice(3))

    return hours * 60 + minutes + " min"
  }

  const getRatingColor = (rating) => {
    if (Number(rating) < 5) return "red"
    if (Number(rating) < 7) return "grey"
    return "green"
  }

  return (
    <div className={styles.container}>
      <div className={styles.filmInfo}>
        <div className={styles.mainInfo}>
          <p className={styles.title}>{nameRu}</p>
          <div className={styles.additionalInfo}>
            <div className={styles.genres}>
              {genres.map((filmGenre, index) => (
                <p key={index} className={styles.genre}>
                  {filmGenre.genre.toUpperCase()}
                </p>
              ))}
            </div>
            <div className={styles.moreInfo}>
              <p>{getFilmLenInMins(filmLength)}</p>
              <p>{year}</p>
            </div>
          </div>
        </div>
        <div className={styles.rating}>
          <p>Рейтинг:</p>
          <span className={styles[`rating--${getRatingColor(rating)}`]}>
            {rating}
          </span>
        </div>
        <p className={styles.description}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum, vero
          et. Velit explicabo ipsam, sint at atque doloribus expedita numquam
          quas. Quasi, dolor asperiores quas quibusdam doloribus omnis quia
          modi?
        </p>
      </div>
      <img src={posterUrl} className={styles.poster} />
    </div>
  )
}
