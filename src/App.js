import './App.css';
import React from 'react';
import {BrowserRouter, Routes, Route, Link, Outlet, useNavigate
} from "react-router-dom";
import Calendar from './components/Calendar';
import SignInForm from './components/SignInForm';
import Dashboard from './pages/Dashboard'
import CounterPage from './pages/CounterPage';


function App() {
    return <>
    <BrowserRouter>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/calendar">Calendar</Link></li>
          <li><Link to="/sign-in">SignInForm</Link></li>
          <li><Link to="/dash/messages">messages</Link></li>
          <li><Link to="/dash/tasks">tasks</Link></li>
          <li><Link to="/counter">counter</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/counter" element={<CounterPage />}></Route>
        <Route path="/calendar" element={<Calendar />}></Route>
        <Route path="/sign-in" element={<SignInForm />}></Route>
        <Route path="/dash/" element={<Dashboard />}>
          <Route path="messages" element={<p>messages</p>} />
          <Route path="tasks" element={<p>tasks</p>} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <p>&copy;2023</p>
    </BrowserRouter>
    </>
}

const Home = () => {return <h2>Home</h2>}
const PageNotFound = (props) => {
  const navigate = useNavigate();
  setTimeout(() => {navigate('/', {replace:true})}, 2000);
  return <h2>404, go to Home</h2>
}

export default App;