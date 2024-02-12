import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/ui/Navbar.js";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Hongos Comestibles",
  description: "Hongos Comestibles de cultivo"
}

export default function RootLayout({ children }) {
  return (
      <html>
      <body className={inter.className}>
        
      <header><Navbar/></header>
        
      {children}
        
      </body>
      </html>
  );
}
