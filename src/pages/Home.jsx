import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div>
    <h1>Welcome to Taskflow</h1>
    <Link to="/sign-in">Sign In</Link> | <Link to="/sign-up">Sign Up</Link>
  </div>
);

export default Home;
