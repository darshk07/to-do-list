// import router from './routing/router'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
// import "./App.css"
import router from "./routing/router"

function App() {

  return (
    <div className="main-container
    h-screen w-screen text-black
    grid grid-cols-1 grid-rows-8 box-border
    lg:h-screen lg:grid-cols-12 lg:align-center lg:justify-center lg:grid-rows-6
    ">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
