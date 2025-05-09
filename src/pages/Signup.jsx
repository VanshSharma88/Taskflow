import React from 'react';
import { SignUp } from '@clerk/clerk-react';

const SignUpPage = () => (
  <div style={{ marginTop: '100px' }}>
    <SignUp routing="path" path="/sign-up" />
  </div>
);

export default SignUpPage;
