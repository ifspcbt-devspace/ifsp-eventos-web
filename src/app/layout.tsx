import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { NextUIProvider } from "@nextui-org/react";
import "react-toastify/dist/ReactToastify.min.css";
import { ToastContainer } from "react-toastify";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Eventos | Home",
  description: "Eventos do IFSP",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className="dark min-h-full">
      <body className={montserrat.className + " h-full"}>
        <ToastContainer />
        <NextUIProvider>{children}</NextUIProvider>
      </body>
    </html>
  );
}
