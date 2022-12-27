import React from "react"
import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"

export function AuthRequired({ children }) {
  const isLogged = useSelector((store) => store.currentUser.token !== null)

  return (
    <>{isLogged ? { children } : <Navigate to="/login" replace={true} />}</>
  )
}
