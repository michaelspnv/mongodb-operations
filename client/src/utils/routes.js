import { Home } from "../pages/Home"
import { Registration } from "../pages/Registration"
import { Login } from "../pages/Login"
import { About } from "../pages/About"
import { Movies } from "../pages/Movies"

export const publicRoutes = [
  {
    id: 1,
    link: "/",
    component: <Home />,
  },
  {
    id: 2,
    link: "registration",
    component: <Registration />,
  },
  {
    id: 3,
    link: "login",
    component: <Login />,
  },
  {
    id: 4,
    link: "about",
    component: <About />,
  },
]

export const privateRoutes = [
  {
    id: 1,
    link: "movies",
    component: <Movies />,
  },
]
