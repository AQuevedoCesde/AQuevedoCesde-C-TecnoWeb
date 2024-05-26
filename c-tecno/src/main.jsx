import ReactDOM from 'react-dom/client'
import Home from './componentes/pages/Home.jsx'
import Login from './componentes/auth/Login.jsx'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'


let router = createBrowserRouter([
    {
        path:'/',
        element: <Login/>
    },
    {
        path:'/home',
        element: <Home/>
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={router}/>
)
