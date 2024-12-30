'use client';

import { signIn, signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import ToggleTheme from './ToggleTheme';

const Navbar = () => {
  const { status } = useSession();

  const handleSignIn = () => {
    signIn('cognito');
  };

  const handleSignOut = () => {
    signOut();
  };

  return (
    <nav className="bg-blue-800 p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex space-x-6">
          <Link
            className="text-white text-2xl font-bold hover:text-gray-300"
            href="/"
          >
            Any$ell
          </Link>
        </div>
        <div className="flex space-x-6 items-center">
          {status === 'unauthenticated' ? (
            <>
              <button
                onClick={handleSignIn}
                className="hover:text-gray-300 text-white text-md font-medium"
              >
                Sign in
              </button>
              <Link
                className="hover:text-gray-300 text-white text-md font-medium"
                href="https://eu-north-1g8byvtjq0.auth.eu-north-1.amazoncognito.com/signup?client_id=76ket7t8r2r5n6sm5n43hpg6us&redirect_uri=http%3A%2Flocalhost%3A3000%2Fapi%2Fauth%2Fcallback%2Fcognito&response_type=code&scope=email+openid+phone"
              >
                Sign up
              </Link>
            </>
          ) : (
            <>
              <Link className='hover:text-gray-300 text-white text-md font-medium' href="/sell-product">
                Sell product
              </Link>
              <button
                onClick={handleSignOut}
                className="hover:text-gray-300 text-white text-md font-medium"
              >
                Sign out
              </button>
            </>
          )}
          <ToggleTheme />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
