import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ThemeProvider } from '../components/ThemeContext';
import { Analytics } from "@vercel/analytics/react"
import './globals.css';

export const metadata = {
  title: 'AudviseHQ - AI-Powered Auditing',
  description: 'Transform financial audits with AI.',
};

export default function RootLayout({ children }) {
  return (
    <ThemeProvider>
      <html lang="en" className="scroll-smooth">
        <body className="bg-primary-light dark:bg-primary-dark text-text-light dark:text-text-dark transition-colors duration-200">
          <Navbar />
          {children}
          <Footer />
          <Analytics />
        </body>
      </html>
    </ThemeProvider>
  );
}