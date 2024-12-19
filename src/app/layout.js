'use client';

import "./globals.css";
import { SessionProvider } from 'next-auth/react';
import Navbar from "@/components/NavBar";

import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

export default function RootLayout({ children, session }) {
  return (
    <SessionProvider session={session}>
      <html lang="en">
        <body>
          <Navbar />
          {children}
        </body>
      </html>
    </SessionProvider>
  );
}
