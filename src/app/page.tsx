"use client"

import { Personsop } from "@/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";



export default function Home() {
  const [search, setsearch] = React.useState('')
  const searchlowercase = search.toLowerCase()
  const trips = Personsop.filter(trip => trip.Name.toLowerCase().includes(searchlowercase))

  return (
    <main className="grid grid-cols-1 w-full">
      <input type="search" value={search} onChange={(e) => setsearch(e.target.value)} className="w-1/2 h-8 mx-auto mt-9 rounded-md border-1 border-solid bg-white border-black"/>

      <section className="w-full max-w-5xl mx-auto px-6 grid grid-cols-3 gap-8 mt-9">
        {trips.map((trip) => (
          <Link href={`/person/${trip.id}`} key={trip.Name} className="block">
            <div className={`bg-neutral-900 h-80 rounded-md p-8 text-gray-300 border-gray-900 border shadow-black shadow-lg hover:scale-100 hover:-translate-y-4 ${trip.variant}`}>
              <header className="flex items-center justify-between ">
                <h1>{trip.Name}</h1>
                <Image src={`/icons/${trip.Name.toLowerCase()}.png`} width={50} height={50} alt="" />
              </header>
                <div className="flex justify-center">
                  <Image src={`/ilustrativeimages/${trip.Name.toLowerCase()}.png`} width={150} height={50} alt=""/>
                </div>
              <p className="mt-3 text-xs">{trip.Previewdescription}</p>
            </div>
          </Link>
        ))}
      </section>

    </main>
  );
}
