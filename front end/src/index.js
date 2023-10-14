import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter , RouterProvider } from 'react-router-dom';
import NotesList from './pages/NotesList';
import SingleNote from './pages/singleNote';
import Errorpage from './pages/Errorpage';
import "./App.css"
import Addnote from './components/Addnote';


const router = createBrowserRouter([
    //This is the path to get all the notes.
    {
    path:'/',
    element: <NotesList/>
    },
    {
        path:'/note/:id',
        element:<SingleNote/>,
        errorElement: <Errorpage/>,
    },
   {  path:'note/create',
      element : <Addnote/>
    }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router}/>
);
