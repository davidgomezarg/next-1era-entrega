import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Navbar.js";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Hongos Comestibles",
  description: "Hongos Comestibles de cultivo"
}

export default function RootLayout({ children }) {
  return (
      
      <body className={inter.className}>
        
      <header><Navbar/></header>
        
      {children}
        
      </body>
  );
}
