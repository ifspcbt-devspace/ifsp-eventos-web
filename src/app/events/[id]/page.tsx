import Header from "@/components/Header";
import React from "react";
import Footer from "@/components/Footer";
import DarkPageHeader from "@/components/DarkPageHeader";
import "@/components/darkpageheader.css";
import Link from "next/link";

export default function EventPage({params}: { params: { id: string } }) {
  const name = "Hallowif";

  return (
    <div className="bg-back-grey">
      <title>Hallowif | IFSP Eventos</title>
      <div className="min-h-[90vh] bg-white">
        <Header/>
        <DarkPageHeader title={"Hallowif - 08/10"} subtitle={"Por IFSP Cubatão"}/>
        <div className="py-10 grid grid-cols-10 w-full">
          <div className={"col-start-3 col-span-6"}>
            <div className="event-page-grid">
              <div className="font-semibold relative">
                <p className="text-lg mb-8">Repudiandae asperiores excepturi repellat minus id et.
                  Saepe molestiae accusantium fugit et aut.
                  Reicie</p>
                <Link href={"/auth/sign-up"}>
                  <div
                    className={`inline-block cursor-pointer duration-200 bg-neutral-900 hover:bg-opacity-90 text-white py-2 px-7 rounded-md`}>
                    Inscreva-se
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );

}