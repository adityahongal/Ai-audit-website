import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './globals.css';

export const metadata = {
  title: 'SignalsHQ - AI-Powered Auditing',
  description: 'Transform financial audits with AI.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#ffffff]">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
