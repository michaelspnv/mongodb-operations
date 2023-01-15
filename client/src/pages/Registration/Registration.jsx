import React, { useState } from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { InputField } from "../../components/InputField"
import styles from "./Registration.module.scss"

export function Registration({ registerUser }) {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const errors = useSelector((state) => state.authErrors)

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
          error={
            errors.validationError.location === "username" &&
            errors.validationError.message
          }
        />

        <InputField
          id="password"
          label="Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          error={
            errors.validationError.location === "password" &&
            errors.validationError.message
          }
        />

        <div className={styles.redirect}>
          <p>Already have an account?</p>
          <Link to="/login">Log In</Link>
        </div>

        <input className={styles.button} type="submit" value="Sign Up" />

        {errors.authError && (
          <p className={styles.error}>{errors.authError.message}</p>
        )}
      </form>
    </div>
  )
}
