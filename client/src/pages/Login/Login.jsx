import React, { useState } from "react"
import { Link } from "react-router-dom"
import { InputField } from "../../components/InputField"
import styles from "./Login.module.scss"

export function Login() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Login</h1>
      <form className={styles.form}>
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
      </form>
    </div>
  )
}
