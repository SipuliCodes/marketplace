'use client';

import { signIn, signOut, useSession } from 'next-auth/react';
import Link from 'next/link';

const Navbar = () => {
  const { status } = useSession();

  const handleSignIn = () => {
    signIn('cognito');
  }

  const handleSignOut = () => {
    signOut();
  }

  return (
    <nav className="bg-blue-800 p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link
          className="text-white text-2xl font-bold hover:text-gray-300"
          href="/"
        >
          Any$ell
        </Link>

        {status === 'unauthenticated' && (
          <div className=" md:flex space-x-6">
            <button
              onClick={handleSignIn}
              className="hover:text-gray-300 text-white"
            >
              Sign in
            </button>
            <Link
              className="hover:text-gray-300 text-white"
              href="https://eu-north-1g8byvtjq0.auth.eu-north-1.amazoncognito.com/signup?client_id=76ket7t8r2r5n6sm5n43hpg6us&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fapi%2Fauth%2Fcallback%2Fcognito&response_type=code&scope=email+openid+phone"
            >
              Sign up
            </Link>
          </div>
        )}
        {status === 'authenticated' && (
          <div className=" md:flex space-x-6">
            <button
              onClick={handleSignOut}
              className="hover:text-gray-300 text-white"
            >
              Sign out
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
