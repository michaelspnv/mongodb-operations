import React, { useState } from "react"
import { Link } from "react-router-dom"
import styles from "./Login.module.scss"

export function Login() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Login</h1>
      <form className={styles.form}>
        <div className={styles.field}>
          <label htmlFor="username">Username</label>
          <input
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            type="text"
            id="username"
            name="username"
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="password">Password</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="text"
            id="password"
            name="password"
          />
        </div>
        <div className={styles.redirect}>
          <p>Don't have an account?</p>
          <Link to="/register">Register</Link>
        </div>
        <input className={styles.button} type="submit" value="Log In" />
      </form>
    </div>
  )
}
