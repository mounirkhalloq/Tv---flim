import { useState } from 'react';

export default function EmailModal() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      console.log('Email submitted:', email); // You can replace this with a database call to save the email
      setIsSubmitted(true);
      // Redirect to dynaiptv.com
      window.location.href = 'https://dynaiptv.com/';
    } else {
      alert('Please enter a valid email address.');
    }
  };

  if (isSubmitted) return null; // Hide modal after submission

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000,
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          background: '#fff',
          padding: '20px',
          borderRadius: '8px',
          textAlign: 'center',
        }}
      >
        <h3>Sign in to continue</h3>
        <p>Please enter your email to access the content.</p>
        <input
          type="email"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ padding: '10px', width: '100%', marginBottom: '10px' }}
          required
        />
        <button
          type="submit"
          style={{
            padding: '10px 20px',
            background: 'orange',
            border: 'none',
            color: '#fff',
            cursor: 'pointer',
          }}
        >
          Subscribe
        </button>
      </form>
    </div>
  );
}
