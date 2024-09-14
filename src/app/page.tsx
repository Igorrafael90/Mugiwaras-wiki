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
      <input type="search" value={search} onChange={(e) => setsearch(e.target.value)} className="w-1/2 h-8 mx-auto mt-2 bg-slate-300 rounded-xl border-blue-500 border-2" />

      <section className="w-full max-w-5xl mx-auto px-6 grid grid-cols-3 gap-8 mt-9">
        {trips.map((trip) => (
          <Link href={`/person/${trip.Name.toLocaleLowerCase()}`} key={trip.Name} className="block">
            <div className="bg-gray-600 h-80 rounded-md p-8 border-gray-600 border shadow-black shadow-lg hover:scale-110 hover:-translate-y-4 hover:border-red-500">
              <header className="flex items-center justify-between text-gray-300">
                <h1>{trip.Name}</h1>
                <h2>icone</h2>
              </header>
              <p>h2 mais uma imagem</p>
              <p>{trip.description}</p>
            </div>
          </Link>
        ))}
      </section>

    </main>
  );
}
