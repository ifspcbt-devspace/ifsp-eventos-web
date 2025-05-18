import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import {NextUIProvider} from "@nextui-org/react";
import "react-toastify/ReactToastify.min.css";
import {ToastContainer} from "react-toastify";
import React from "react";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
  title: {
    template: "%s | IFSP Eventos",
    default: "IFSP Eventos",
  },
  description: "Eventos do IFSP Cubatão",
  metadataBase: new URL("https://eventos.gremioifspcbt.shop/"),
  openGraph: {
    siteName: "IFSP Eventos",
    title: "IFSP Eventos",
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
      className="light min-h-[100vh] scroll-smooth relative"
      style={{scrollBehavior: "smooth", padding: 0, margin: 0}}
    >
    <body className={inter.className + " min-h-[100vh]"}>
    <ToastContainer/>
    <NextUIProvider>
      {children}
    </NextUIProvider>
    </body>
    </html>
  );
}
