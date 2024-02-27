import { createBrowserRouter } from "react-router-dom"
import {  Main, ErrorPage, Price, Contact} from "./components"


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main/>,
        errorElement: <ErrorPage />,
    },
    {
        path: "/price",
        element: <Price/>,
        errorElement: <ErrorPage />,
    },
    {
        path: "/contact",
        element: <Contact/>,
        errorElement: <ErrorPage />,
    },
    
    
])
export default router;