import Footer from "@/components/shared/footer";
import Header from "@/components/shared/header";
import { ReactNode } from "react";

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <div className="p-2">
        <Header />
        {/* <h2 className="text-2xl">Root Layout</h2> */}
        {children}
      </div>
      <Footer />
    </>
  );
}
