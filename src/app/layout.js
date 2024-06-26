import { Inter } from "next/font/google";
import "./globals.css";
import { orbitron } from "../app/ui/fonts"
import Nav from './component/navbar/page'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Marvel Api",
  description: "Generated by Alejandro Ponce",
};

export default  function RootLayout({ children }) {
 
  return (
    
    <html lang="es">
      <body ><Nav /><h1 className={`${orbitron.className} antialiased text-slate-300 text-7xl text-center`}>Marvel Api</h1>{children}<footer className="text-slate-500 text-center py-5 opacity-30">creado por Alejandro Ponce</footer></body>
    </html>
  );
}
