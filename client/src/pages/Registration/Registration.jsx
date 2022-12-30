import React, { useState } from "react"
import { Link } from "react-router-dom"
import { InputField } from "../../components/InputField"
import styles from "./Registration.module.scss"

export function Registration({ registerUser }) {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

    registerUser({ username, password })
  }

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Register</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <InputField
          id="username"
          label="Username"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
        <InputField
          id="password"
          label="Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <div className={styles.redirect}>
          <p>Already have an account?</p>
          <Link to="/login">Log In</Link>
        </div>
        <input className={styles.button} type="submit" value="Sign Up" />
      </form>
    </div>
  )
}
