import {
  Geist,
  Geist_Mono,
  Plus_Jakarta_Sans,
  Manrope,
} from 'next/font/google';
import './globals.css';
import { ReactNode } from 'react';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const jakartaSans = Plus_Jakarta_Sans({
  variable: '--font-jakarta-sans',
  subsets: ['latin'],
});

const manrope = Manrope({
  variable: '--font-manrope',
  subsets: ['latin'],
});

export const metadata = {
  title: 'Adology',
  description: 'Customize ads for your customers',
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${jakartaSans.variable} ${manrope.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
