import React, { useState } from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { InputField } from "../../components/InputField"
import styles from "./Login.module.scss"

export function Login({ logUserIn }) {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const errors = useSelector((state) => state.authErrors)

  const handleSubmit = (e) => {
    e.preventDefault()
    logUserIn({ username, password })
  }

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Login</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
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
          <p>Don't have an account?</p>
          <Link to="/register">Register</Link>
        </div>
        <input className={styles.button} type="submit" value="Log In" />

        {errors.authError && (
          <p className={styles.error}>{errors.authError.message}</p>
        )}
      </form>
    </div>
  )
}
