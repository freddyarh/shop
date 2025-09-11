import { RouterProvider } from "react-router"
import { appRouter } from "./app.router"

export const MakeupShopApp = () => {
  return (
    <RouterProvider router={appRouter} />
  )
}
