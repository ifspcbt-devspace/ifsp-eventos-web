import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import {NextUIProvider} from "@nextui-org/react";
import "react-toastify/ReactToastify.min.css";
import {ToastContainer} from "react-toastify";
import Header from "@/components/Header";
import React from "react";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
  title: {
    template: "%s | IFSP Eventos",
    default: "IFSP Eventos",
  },
  description: "Eventos do IFSP Cubatão",
  metadataBase: new URL("https://srv563244.hstgr.cloud/"),
  openGraph: {
    siteName: "IFSPEventos",
    title: "IFSPEventos",
    description: "Eventos do IFSP Cubatão",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout(
  {
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  return (
    <html
      lang="pt-br"
      className="light min-h-full scroll-smooth"
      style={{scrollBehavior: "smooth"}}
    >
    <body className={inter.className + " h-full"}>
    <ToastContainer/>
    <NextUIProvider>
      <Header/>
      {children}
    </NextUIProvider>
    </body>
    </html>
  );
}
