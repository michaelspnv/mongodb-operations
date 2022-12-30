import React from "react"
import classNames from "classnames/bind"
import styles from "./InputField.module.scss"

export function InputField({ id, label, className, ...props }) {
  const cx = classNames.bind(styles)

  const classes = cx("field", className)

  return (
    <div className={classes}>
      {label && <label htmlFor={id}>{label}</label>}
      <input id={id} name={id} {...props} />
    </div>
  )
}
