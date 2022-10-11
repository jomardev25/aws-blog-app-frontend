import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import RouteGuard from "./Component/RouteGuard";
import Home from './Home';
import Post from './Post';
import ShowPost from './Post/Show';
import BlogIndex from './Post/PostIndex';
import CreatePost from "./Post/CreatePost";
import EditPost from "./Post/EditPost";
import User from './User';
import Login from "./Auth/Login";
import './App.css';

function App() {

  const logout = () =>{
    localStorage.clear();
    window.location.href = "/";
  };


  return (
    <div className="App">
      <Router>
        <div>
          <nav className="nav">
            
            {
              localStorage.getItem("token") ?
              <ul className="navigation">
                  <li><Link to="/admin/blogs">Blogs</Link> </li>
                  <li><Link to="/admin/users">Users</Link> </li>
                  <li><Link onClick={logout}>Logout</Link> </li>
              </ul>
              :
              <ul className="navigation">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/blogs">Blogs</Link></li>
                <li><Link to="/login">Login</Link></li>
              </ul>
            }
          </nav>
          <main>
            <Routes>
              <Route exact path='/admin/users' element={<RouteGuard/>}>
                <Route exact path='/admin/users' element={<User/>}/>
              </Route>
              <Route exact path='/admin/blogs/create' element={<RouteGuard/>}>
                <Route exact path='/admin/blogs/create' element={<CreatePost/>}/>
              </Route>
              <Route exact path='/admin/blogs/edit/:id' element={<RouteGuard/>}>
                <Route exact path='/admin/blogs/edit/:id' element={<EditPost/>}/>
              </Route>
              <Route exact path='/admin/blogs' element={<RouteGuard/>}>
                <Route exact path='/admin/blogs' element={<BlogIndex/>}/>
              </Route>
              <Route path="/blogs" element={<Post/>} />
              <Route exact path="/blogs/:id" element={<ShowPost/>}/>
              <Route exact path="/login" element={<Login/>}/>
              <Route exact path="/" element={<Home/>}/>
            </Routes>
          </main>
        </div>
      </Router>
    </div>
  );
}

export default App;
