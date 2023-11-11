import { Route, Routes, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import SignInPage from "../pages/SignInPage";
import NotFound from "../pages/NotFound";
import Layout from "../components/Layout";
import SignUpPage from "../pages/SignUpPage"; 

// export const router = createBrowserRouter([

//     //  public routes 
//     {
//         path: '/',
//         element: <Dashboard />
//     },
//     {
//         path: '/login',
//         element: <SignInPage />
//     }
// ])

export const router = createBrowserRouter(createRoutesFromElements(
    <>
        <Route>

            <Route element={<Layout />}>
                <Route index 
                // element={<Dashboard />} 
                lazy={()=>import("../pages/Dashboard")} 
                />
            </Route>

            <Route element={<Layout hideSidebar={true} />}>
                <Route path="login" element={<SignInPage />} />
                <Route path="signup" element={<SignUpPage />} />
            </Route>

            <Route path="*" element={<NotFound />} />

        </Route>
    </>
))