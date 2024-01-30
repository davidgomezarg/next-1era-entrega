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
    <html lang="en">
      <div>
        <Navbar/>
      </div>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
