import React from "react"
import { $axios } from "../http"

export function RegistrationContainer({ children }) {
  const registerUser = async (userData) => {
    try {
      await $axios.post("/register", userData)
    } catch (error) {
      console.log(error)
    }
  }

  return React.cloneElement(children, {
    registerUser,
  })
}
