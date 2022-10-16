import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ROUTES, ROUTE } from './routes'

const routeWithSubRoutes = (route: ROUTE) => {
  return route.routes ? (
    <Route key={route.key} path={route.path}>
      <Route index element={<route.element />} />
      {route.routes.map(routeWithSubRoutes)}
    </Route>
  ) : (
    <Route path={route.path} key={route.key} element={<route.element />} />
  )
}

const AppRouter = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>{ROUTES.map(routeWithSubRoutes)}</Routes>
      </BrowserRouter>
    </>
  )
}

export default AppRouter
