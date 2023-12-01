import Navbar from './Navbar';
import Footer from './Footer';
// Pass the child props
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
