import type {Metadata} from "next";
import {Inter} from "next/font/google";
import '@/app/globals.css';
import React from "react";
import Providers from "@/app/providers";

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

export default function RootLayout({children}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="pt-br"
      className={`${inter.className} light min-h-[100vh] scroll-smooth relative`}
      style={{scrollBehavior: "smooth", padding: 0, margin: 0}}
    >
    <body>
    <Providers>
      {children}
    </Providers>
    </body>
    </html>
  );
}
