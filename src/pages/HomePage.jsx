import React from 'react'
import { useAuth } from '../hooks/useAuth'
import { Link } from 'react-router-dom';

export default function HomePage() {
  const {auth} = useAuth();
  console.log(auth);
  return (
    <div>

      <p>Home page</p>
<Link to="/me">Go toProfile Page</Link>
    </div>
  )
}
