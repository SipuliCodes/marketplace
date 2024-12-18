'use client';

import { useSession } from 'next-auth/react';
import { useEffect } from 'react';

const LandingPage = () => {
  const { status } = useSession();
  useEffect(() => {
    document.title = 'Any$ell';
  }, []);

  if (status === 'loading') {
    return (
      <>
        <div className="flex items-center justify-center h-screen">
          <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-blue-800"></div>
        </div>
      </>
    );
  }

  return (
    <div>
    </div>
  );
};

export default LandingPage;
