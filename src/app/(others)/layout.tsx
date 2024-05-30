

import Footer from "@/components/footer";
import { Header } from "../header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      {children}
      < Footer />
    </>
  );
}
