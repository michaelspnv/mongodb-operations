import React from "react"
import { Link, Outlet } from "react-router-dom"
import styles from "./Layout.module.scss"

export function Layout() {
  return (
    <>
      <div className={styles.header}>
        <ul className={styles.navMenu}>
          <li>
            <Link className={styles.navLink} to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className={styles.navLink} to="/movies">
              Movies
            </Link>
          </li>
          <li>
            <Link className={styles.navLink} to="/about">
              About
            </Link>
          </li>
        </ul>
      </div>
      <div className={styles.container}>
        <Outlet />
      </div>
      <div className={styles.footer}></div>
    </>
  )
}
