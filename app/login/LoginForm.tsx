"use client";
import { useState } from "react";

export default function LoginForm() {
  const [user, setUser] = useState('');
  const [message, setMessage] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setMessage('');
    try {
      const res = await fetch('http://localhost:3001/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ user }),
      });
      const data = await res.json();
      if (!res.ok) {
        setMessage(data.error || (data.errors && data.errors[0].msg) || 'Login failed');
      } else {
        setMessage('Logged in successfully');
      }
    } catch (err) {
      setMessage('Network error');
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="user">Email or international phone</label>
      <input
        id="user"
        name="user"
        value={user}
        onChange={(e) => setUser(e.target.value)}
        placeholder="you@example.com or +1234567890"
        className="w-full mb-2 p-2 border rounded"
      />
      <div className="flex gap-2">
        <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">
          Log in
        </button>
        <p className="text-red-600">{message}</p>
      </div>
    </form>
  );
}
