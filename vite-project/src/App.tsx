import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import NewUser from './NewUser';
import './App.css'

function Header() {
  const location = useLocation();

  return (
    <h1>
      {location.pathname === '/' ? 'Welcome' : 'Create a New User'}
    </h1>
  )
}

function NavBar() {
  const location = useLocation();

  //Hide navbar on specific routes
  const hideNavRoutes = ['/NewUser'];
  const shouldHideNav = hideNavRoutes.includes(location.pathname);

  if (shouldHideNav) return null;

  return (
    <nav>
      <Link to='/NewUser'>Create User</Link>
    </nav>
  )
}

function App() {

  return (
    <>
      <Router>
        <Header />
        <NavBar />

        <Routes>
          <Route path='/NewUser' element={<NewUser />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
