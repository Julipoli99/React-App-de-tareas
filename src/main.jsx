import React from 'react'
import ReactDOM from 'react-dom/client'
//import {App} from './App.jsx'
import { AppTask } from './TaskComponents/App.jsx'
import { TaskContextProvider } from './context/TaskContext.jsx';
//import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <TaskContextProvider>
    <AppTask />
  </TaskContextProvider>
)
