import Header from "@/components/Header";
import React from "react";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import {Metadata} from "next";

export const metadata: Metadata = {
  title: 'Página não encontrada',
}

export default function NotFound() {
  return (
    <div className="bg-back-grey">
      <Header/>
      <div className="utility-page-wrap">
        <div className="utility-page-content">
          <Image src="/images/not-found-icon.svg" alt="Página não encontrada" width={128} height={128}
                 className="text-white mb-4"/>
          <h1 className="text-5xl font-semibold mb-5 block">Página não encontrada</h1>
          <p>A página que você procura não existe ou foi movida.</p>
          <Link href="/"
                className="bg-white shadow-sm text-black font-medium text-center rounded-lg py-2 px-7 text-lg duration-200 hover:bg-silver">Ir
            para o início</Link>
        </div>
      </div>
      <Footer/>
    </div>
  );
}