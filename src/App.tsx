import React from "react"
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import { RootLayout } from "./layout/RootLayout"
import { HomePage } from "./pages/HomePage"
import { AboutPage } from "./pages/AboutPage"
import { UserPage } from "./pages/UserPage"

const App: React.FC = () => {
    
    const router = createBrowserRouter(createRoutesFromElements(
        <Route path="/" element={<RootLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/user/:id" element={<UserPage />} />
        </Route>
    ))

    return (
        <RouterProvider router={router} />
    )
}

export default App;