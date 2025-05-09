import React from 'react';
import { SignIn } from '@clerk/clerk-react';

const SignInPage = () => (
  <div style={{ marginTop: '100px' }}>
    <SignIn routing="path" path="/sign-in" />
  </div>
);

export default SignInPage;
