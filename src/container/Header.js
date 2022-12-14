import { NavLink } from 'react-router-dom';

const Header = () => {
    return(
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{padding:'0px 10px'}}>
      <NavLink className="navbar-brand" to="/">Management App</NavLink>
        <div className="navbar-nav">
          <NavLink className="nav-item nav-link active" to="/">Home </NavLink>
          <NavLink className="nav-item nav-link" to="/posts">Posts</NavLink>
          <NavLink className="nav-item nav-link" to="/add-post">Add Post</NavLink>
        </div>
    </nav>
    );
}

export default Header;