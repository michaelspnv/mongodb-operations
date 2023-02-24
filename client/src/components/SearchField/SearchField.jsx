import React, { useState, useEffect } from "react"
import { useDispatch } from "react-redux"
import { findFilms } from "../../store/features/loadedFilmsSlice"
import SearchIcon from "../../../public/svg/search-icon.svg"
import styles from "./SearchField.module.scss"

export function SearchField() {
  const [inputValue, setInputValue] = useState("")

  const dispatch = useDispatch()

  const handleChange = (e) => {
    setInputValue(e.target.value)
  }

  useEffect(() => {
    const Debounce = setTimeout(() => {
      dispatch(findFilms({ searchFilter: inputValue }))
    }, 300)

    return () => clearTimeout(Debounce)
  }, [inputValue])

  return (
    <div className={styles.container}>
      <img src={SearchIcon} height="22" />
      <input
        className={styles.input}
        placeholder="Search..."
        spellCheck={false}
        onChange={handleChange}
        value={inputValue}
      />
    </div>
  )
}
