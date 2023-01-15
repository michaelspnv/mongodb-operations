import React from "react"
import classNames from "classnames/bind"
import styles from "./InputField.module.scss"

export function InputField({ id, label, className, error, ...props }) {
  const cx = classNames.bind(styles)

  const classes = cx("field", className)

  return (
    <div className={classes}>
      {label && <label htmlFor={id}>{label}</label>}
      <input id={id} name={id} {...props} />
      {error && <p className={styles.error}>{error}</p>}
    </div>
  )
}
