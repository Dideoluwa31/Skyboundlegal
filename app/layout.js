// app/layout.js
import { Montserrat } from 'next/font/google';
import './globals.css';
import Navbar from './navcomponents/Navbar';
import Footer from '../components/footer';
import Image from 'next/image';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
});

export const metadata = {
  title: 'Skybound Solicitor | Immigration Services',
  description: 'Offering trusted legal and immigration law services for individuals, families, and businesses.',
  openGraph: {
    images: [
      {
        url: "https://skyboundsolisitor.com/skylogo.jpg",
        width: 800,
        height: 600,
        alt: "Skybound International Solicitor and Legal Services Logo",
      },
    ],
  },
  
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
            <Navbar />
            <main>{children}</main>
            <Footer />
      </body>
    </html>
  );
} 