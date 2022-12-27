import React from "react"
import { useNavigate } from "react-router-dom"
import styles from "./Login.module.scss"

export function Login() {
  const navigate = useNavigate()

  const handleSubmit = () => {
    navigate("/")
  }

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Login</h1>
      <form
        className={styles.form}
        action="http://localhost:3001/login"
        method="POST"
        onSubmit={handleSubmit}
      >
        <div className={styles.field}>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" />
        </div>
        <div className={styles.field}>
          <label htmlFor="password">Password</label>
          <input type="text" id="password" name="password" />
        </div>
        <button className={styles.button} type="submit">
          Log In
        </button>
      </form>
    </div>
  )
}
