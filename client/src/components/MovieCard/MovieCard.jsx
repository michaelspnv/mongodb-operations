import React, { useState, useRef } from "react"
import { useIntersection } from "../../hooks/useIntersection"
import cn from "classnames"
import styles from "./MovieCard.module.scss"

export function MovieCard({ nameRu, rating, posterUrl }) {
  const [isInView, setIsInView] = useState(false)

  const [isImgLoaded, setIsImgLoaded] = useState(false)

  const cardRef = useRef(null)

  useIntersection(cardRef, () => {
    setIsInView(true)
  })

  const handleOnLoad = () => {
    setIsImgLoaded(true)
  }

  return (
    <div className={styles.cell} ref={cardRef}>
      {isInView && (
        <>
          <div className={styles.movieTitle}>
            <p className={styles.movieName}>{nameRu}</p>
          </div>
          <hr />
          <div className={styles.movieContent}>
            <div className={styles.ratingBox}>
              <p className={styles.movieRating}>{rating}</p>
            </div>
            <img
              src={posterUrl}
              className={cn(styles.image, {
                [styles.imageLoaded]: isImgLoaded,
              })}
              onLoad={handleOnLoad}
            />
          </div>
        </>
      )}
    </div>
  )
}
