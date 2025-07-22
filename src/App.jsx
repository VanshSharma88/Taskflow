import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ClerkProvider, SignIn, SignUp } from '@clerk/clerk-react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Tasks from './pages/Tasks';
import AllTasks from './pages/AllTasks';
import './styles/styles.css';
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

function App() {
  return (
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <Router>
        <div className="app">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tasks" element={<Tasks />} />
            <Route path="/all-tasks" element={<AllTasks />} />
            <Route 
              path="/sign-in" 
              element={
                <div className="auth-container">
                  <SignIn redirectUrl="/" />
                </div>
              } 
            />
            <Route 
              path="/sign-up" 
              element={
                <div className="auth-container">
                  <SignUp redirectUrl="/" />
                </div>
              } 
            />
          </Routes>
        </div>
      </Router>
    </ClerkProvider>
  );
}

export default App;