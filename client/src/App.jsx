import React, { useState } from "react"
import { Routes, Route } from "react-router-dom"
import { publicRoutes, privateRoutes } from "./utils/routes"
import { Layout } from "./components/Layout"
import { AuthRequired } from "./hoc/AuthRequired"

import "reset-css"
import "./App.scss"

export default function App() {
  // const [movies, setMovies] = useState([])
  // const [loading, setLoading] = useState(false)

  // const getMovies = () => {
  //   setLoading(true)
  //   fetch("http://localhost:3001/api/movies")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setLoading(false)
  //       setMovies(data)
  //     })
  // }

  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          {publicRoutes.map((route) => (
            <Route key={route.id} path={route.link} element={route.component} />
          ))}
          {privateRoutes.map((route) => (
            <Route
              key={route.id}
              path={route.link}
              element={<AuthRequired>{route.component}</AuthRequired>}
            />
          ))}
        </Route>
      </Routes>
    </>
  )
}
