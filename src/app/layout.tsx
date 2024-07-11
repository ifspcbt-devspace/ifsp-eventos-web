import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { NextUIProvider } from "@nextui-org/react";

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
    <html lang="pt-br" className="dark">
      <body className={montserrat.className}>
        <NextUIProvider>{children}</NextUIProvider>
      </body>
    </html>
  );
}
