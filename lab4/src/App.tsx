import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import {Advertisement, HomePage} from "./compoentns";


const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/:lang/page-url',
    element: <Advertisement />
  }

])

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App















