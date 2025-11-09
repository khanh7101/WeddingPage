// src/layout/MainLayout.tsx
import Header from "./Header";
import Footer from "./Footer";
import { HeaderProvider } from "./HeaderContext";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <HeaderProvider>
        <Header />
        <main>{children}</main>
        <Footer />
      </HeaderProvider>
    </>
  );
}
