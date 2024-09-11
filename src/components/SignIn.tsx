// src/components/SignIn.tsx

import React, { useState } from 'react';

const SignIn: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle sign-in logic here
    console.log('Sign-In:', { email, password });
  };

  return (
    <div className="sign-in-container">
      <form className="sign-in-form" onSubmit={handleSubmit}>
        <h2>Sign In</h2>
        <input 
          type="email" 
          placeholder="Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />
        <input 
          type="password" 
          placeholder="Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required 
        />
        <button type="submit">Sign In</button>
        <p>Don't have an account? <a href="/sign-up">Sign Up</a></p>
      </form>
    </div>
  );
};

export default SignIn;
