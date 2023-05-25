import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Course from '../../components/Course/Course';
import Courses from '../../components/Courses/Courses';
import Home from '../../components/Home/Home';
import Main from '../../layout/Main';
import Register from '../../components/Register/Register'
import Login from '../../components/Login/Login'
import PrivateRoute from '../../components/PrivateRoute/PrivateRoute';
import PageNotFound from '../../components/PageNotFound/PageNotFound';

export const routes=createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,

        children:[
            {
                path:'/',
                element:<Home></Home>,
                
            },

            {
                path:'/courses',
                element:<Courses></Courses>
            },


    

            {
                path:'/course/:id',
                element:<PrivateRoute><Course></Course></PrivateRoute>,
                loader:({params})=>fetch(`https://courses-server-blond.vercel.app/${params.id}`)
            },

            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'*',
                element:<PageNotFound></PageNotFound>
            }

            

            
        ]
    
    
    }
])