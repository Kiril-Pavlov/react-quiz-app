import { createBrowserRouter, RouterProvider} from 'react-router-dom'

//components
import Home from "./components/Home"
import Quiz from "./components/Quiz"
import Result from "./components/Result"


// react routes
const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Home/>
    },
    {
      path: "/quiz",
      element: <Quiz/>
    },
    {
      path: "/result",
      element: <Result/>
    },
  ]
)

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App;
