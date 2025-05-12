// import { useState } from 'react';
// import './Header.css';


// const Header = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <header className="header">
//       <div className="header-container">
//         <div className="logo-section">
          
//           <h1 className="brand-name">Taskflow 📝</h1>
//         </div>

//         <nav className="navigation">
//           <ul className="nav-links">
//             <li><a href="#" className="nav-link">Projects</a></li>
//             <li><a href="#" className="nav-link">Tasks</a></li>
//             <li><a href="#" className="nav-link">Teams</a></li>
//             <li><a href="#" className="nav-link">Reports</a></li>
//           </ul>
//         </nav>

//         <div className="header-actions">
//           <button className="btn-secondary">Sign In</button>
//           <button className="btn-primary">Get Started</button>
//         </div>

//         <button 
//           className={`mobile-menu-toggle ${menuOpen ? 'open' : ''}`}
//           onClick={() => setMenuOpen(!menuOpen)}
//           aria-label="Toggle menu"
//         >
//           <span></span>
//           <span></span>
//           <span></span>
//         </button>
//       </div>

//       {menuOpen && (
//         <div className="mobile-menu fade-in">
//           <nav className="mobile-navigation">
//             <ul className="mobile-nav-links">
//               <li><a href="#" className="mobile-nav-link">Projects</a></li>
//               <li><a href="#" className="mobile-nav-link">Tasks</a></li>
//               <li><a href="#" className="mobile-nav-link">Teams</a></li>
//               <li><a href="#" className="mobile-nav-link">Reports</a></li>
//             </ul>
//           </nav>
//           <div className="mobile-header-actions">
//             <button className="btn-secondary">Sign In</button>
//             <button className="btn-primary">Get Started</button>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Header;
import { useState } from 'react';
import { SignInButton, SignOutButton, useUser, SignedIn, SignedOut } from '@clerk/clerk-react';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user } = useUser(); // Get the signed-in user from Clerk

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-section">
          <h1 className="brand-name">Taskflow 📝</h1>
        </div>

        <nav className="navigation">
          <ul className="nav-links">
            <li><a href="#" className="nav-link">Projects</a></li>
            <li><a href="#" className="nav-link">Tasks</a></li>
            <li><a href="#" className="nav-link">Teams</a></li>
            <li><a href="#" className="nav-link">Reports</a></li>
          </ul>
        </nav>
        
        <div className="header-actions">
          <SignedIn>
            <p>Welcome, {user?.firstName}!</p>
            <SignOutButton>
              <button className="btn-secondary">Sign Out</button>
            </SignOutButton>
          </SignedIn>
          
          <SignedOut>
            <SignInButton>
              <button className="btn-secondary">Sign In</button>
            </SignInButton>
          </SignedOut>

          <button className="btn-primary">Get Started</button>
        </div>

        <button 
          className={`mobile-menu-toggle ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {menuOpen && (
        <div className="mobile-menu fade-in">
          <nav className="mobile-navigation">
            <ul className="mobile-nav-links">
              <li><a href="#" className="mobile-nav-link">Projects</a></li>
              <li><a href="#" className="mobile-nav-link">Tasks</a></li>
              <li><a href="#" className="mobile-nav-link">Teams</a></li>
              <li><a href="#" className="mobile-nav-link">Reports</a></li>
            </ul>
          </nav>
          <div className="mobile-header-actions">
            <SignedOut>
              <SignInButton>
                <button className="btn-secondary">Sign In</button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <SignOutButton>
                <button className="btn-secondary">Sign Out</button>
              </SignOutButton>
            </SignedIn>
            <button className="btn-primary">Get Started</button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
