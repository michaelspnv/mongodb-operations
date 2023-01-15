import React from "react"
import { useDispatch } from "react-redux"
import { initiateNewError } from "../store/slices/authErrorsSlice"
import { $axios } from "../http"

export function RegistrationContainer({ children }) {
  const dispatch = useDispatch()

  const registerUser = async (userData) => {
    try {
      const res = await $axios.post("/register", userData)

      if (res.data.errorType) {
        dispatch(
          initiateNewError({
            errorType: res.data.errorType,
            message: res.data.message,
            location: res.data.location,
          })
        )
      }
    } catch (error) {
      console.log(error)
    }
  }

  return React.cloneElement(children, {
    registerUser,
  })
}
