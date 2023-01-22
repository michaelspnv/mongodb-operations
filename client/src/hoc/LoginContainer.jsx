import React from "react"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { initiateNewError } from "../store/features/authErrorsSlice"
import { createUser } from "../store/features/currentUserSlice"
import { $axios } from "../http"

export function LoginContainer({ children }) {
  const dispatch = useDispatch()

  const navigate = useNavigate()

  const logUserIn = async (checkingData) => {
    try {
      const res = await $axios.post("/login", checkingData)

      if (res.data.errorType) {
        dispatch(
          initiateNewError({
            errorType: res.data.errorType,
            message: res.data.message,
          })
        )
      }

      if (res.data.message === "SUCCESS") {
        dispatch(createUser({ username: res.data.userCredentials.username }))
        navigate("/")
      }
    } catch (error) {
      console.log(error)
    }
  }

  return React.cloneElement(children, {
    logUserIn,
  })
}
