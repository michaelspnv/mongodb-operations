import { Home } from "../pages/Home"
import { RegistrationContainer } from "../hoc/RegistrationContainer"
import { Registration } from "../pages/Registration"
import { LoginContainer } from "../hoc/LoginContainer"
import { Login } from "../pages/Login"
import { About } from "../pages/About"
import { Movies } from "../pages/Movies"
import { Film } from "../pages/Film"

export const publicRoutes = [
  {
    id: 1,
    link: "/",
    component: <Home />,
  },
  {
    id: 2,
    link: "register",
    component: (
      <RegistrationContainer>
        <Registration />
      </RegistrationContainer>
    ),
  },
  {
    id: 3,
    link: "login",
    component: (
      <LoginContainer>
        <Login />
      </LoginContainer>
    ),
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
  {
    id: 2,
    link: "movies/:filmId",
    component: <Film />,
  },
]
