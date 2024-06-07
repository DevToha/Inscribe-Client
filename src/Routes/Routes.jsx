import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
// import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dashboard";
import Cart from "../Pages/Dashboard/Cart/Cart";
import CreateNote from "../Pages/Dashboard/Create Note/CreateNote";
import SessionDetail from "../Pages/Home/Study session/SessionDetail";
import PrivateRoute from "./PrivateRoute";
import PersonalNote from "../Pages/Dashboard/Personal Note/PersonalNote";
import StudyMaterial from "../Pages/Dashboard/Study material/StudyMaterial";
import AllUser from "../Pages/Dashboard/All User/AllUser";
import AllMaterials from "../Pages/Dashboard/All Materials/AllMaterials";
import AdminRoute from "./AdminRoute";
import CreateSession from "../Pages/Dashboard/Create study session/CreateSession";
import TutorRoute from "./TutorRoute";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/SessionDetail/:_id',
                element: <PrivateRoute><SessionDetail></SessionDetail></PrivateRoute>
            }
        ]
    },
    {
        path: "dashboard",
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [

            // student routes 
            {
                path: 'cart',
                element: <Cart></Cart>
            },
            {
                path: 'CreateNote',
                element: <CreateNote></CreateNote>
            },
            {
                path: 'personalNote',
                element: <PersonalNote></PersonalNote>
            },
            {
                path: 'studyMaterial',
                element: <StudyMaterial></StudyMaterial>
            },

            // Tutor Routes 

            {
                path: 'createSession',
                element: <TutorRoute><CreateSession></CreateSession></TutorRoute>
            },

            // Admin Routes 

            {
                path: 'allUser',
                element: <AdminRoute><AllUser></AllUser></AdminRoute>
            },
            {
                path: 'allMaterials',
                element: <AdminRoute><AllMaterials></AllMaterials></AdminRoute>
            }
        ]
    }
]);