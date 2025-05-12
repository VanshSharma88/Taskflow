import React from 'react';
import { useUser, SignedIn, SignedOut, SignOutButton } from '@clerk/clerk-react';

const Dashboard = () => {
  const { user } = useUser();

  return (
    <div>
      <SignedIn>
        <h2>Welcome, {user?.firstName}!</h2>
        <SignOutButton />
      </SignedIn>

      <SignedOut>
        <p>You must signed in to view the dashboard. </p>
        <p>YOU must signed in to the direction less account for </p>
      </SignedOut>
    </div>
  );
};

export default Dashboard;
