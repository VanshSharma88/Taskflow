import { Link, useLocation } from 'react-router-dom';
import { UserButton, useUser } from '@clerk/clerk-react';

const Navbar = () => {
  const location = useLocation();
  const { isSignedIn, user } = useUser();

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-brand">
          TaskBoard
        </Link>
        
        {isSignedIn && (
          <ul className="nav-links">
            <li>
              <Link to="/" className={isActive('/')}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/tasks" className={isActive('/tasks')}>
                Tasks
              </Link>
            </li>
            <li>
              <Link to="/all-tasks" className={isActive('/all-tasks')}>
                All Tasks
              </Link>
            </li>
          </ul>
        )}

        <div className="auth-section">
          {isSignedIn ? (
            <div className="user-info">
              <span>Welcome, {user.firstName}!</span>
              <UserButton />
            </div>
          ) : (
            <div>
              <Link to="/sign-in" className="btn btn-primary">
                Sign In
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;