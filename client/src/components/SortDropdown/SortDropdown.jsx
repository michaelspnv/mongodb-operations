import React, { useRef } from "react"
import styles from "./SortDropdown.module.scss"

export function SortDropdown({ setSortFilter }) {
  const sortBtnRef = useRef(null)

  const handleChange = () => {
    setSortFilter(sortBtnRef.current.value)
  }

  return (
    <>
      <label htmlFor="sort" className={styles.sortBtnLabel}>
        Sort by:
      </label>
      <select
        name="sort"
        id="sort"
        ref={sortBtnRef}
        onChange={handleChange}
        className={styles.sortBtn}
      >
        <option value="release date">Release Date</option>
        <option value="rating">Rating</option>
        <option value="popularity">Popularity</option>
      </select>
    </>
  )
}
