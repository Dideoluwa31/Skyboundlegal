import { Montserrat } from 'next/font/google';
import './globals.css';
import ClientLayout from './components/ClientLayout'

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
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}