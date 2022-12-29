import React, { useState } from "react"
import { $axios } from "../../http"
import { Link } from "react-router-dom"
import styles from "./Registration.module.scss"

export function Registration() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await $axios.post("/register", {
        username,
        password,
      })
      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Register</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
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
          <p>Already have an account?</p>
          <Link to="/login">Log In</Link>
        </div>
        <input className={styles.button} type="submit" value="Sign Up" />
      </form>
    </div>
  )
}
