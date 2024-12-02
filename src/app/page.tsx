"use client"

import { Personsop } from "@/data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons"
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";


export default function Home() {
  const [search, setsearch] = React.useState('')
  const searchlowercase = search.toLowerCase()
  const trips = Personsop.filter(trip => trip.Nome.toLowerCase().includes(searchlowercase))
  const cardVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <main className="grid grid-cols-1 w-full">
      <header className="bg-neutral-900 h-14 w-full">
            <div className="flex items-center justify-around">
                <Link href={`/`}>
                    <FontAwesomeIcon className="text-white" icon={faHouse}/>
                </Link>
                <h1 className="text-4xl uppercase text-white">One piece</h1>
                <div/>
            </div>
        </header>
        
      <input type="search" value={search} onChange={(e) => setsearch(e.target.value)} className="w-1/2 h-8 mx-auto mt-9 rounded-md border-1 border-solid bg-white border-black"/>

      <section className="w-full max-w-5xl mx-auto px-6 grid grid-cols-3 gap-8 mt-9 max-smd:grid-cols-2 ">
        {trips.map((trip) => (
          <motion.div
          key={trip.Nome}
          className="block"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5}}
          variants={cardVariants}
        >
          <Link href={`/person/${trip.Nome}`} key={trip.Nome} className="block">
            <div className={`bg-neutral-900 h-80 rounded-md p-8 text-gray-300 border-gray-900 border shadow-black shadow-lg ${trip.variant} transition ease-out hover:scale-105 hover:-translate-y-3 duration-200`}>
              <header className="flex items-center justify-between">
                <h1>{trip.Nome}</h1>
                <Image src={`/icons/${trip.Nome.toLowerCase()}.png`} width={50} height={50} alt="" />
              </header>
                <div className="flex justify-center">
                  <Image src={`/ilustrativeimages/${trip.Nome.toLowerCase()}.png`} width={150} height={50} alt=""/>
                </div>
              <p className="py-2 text-XD">{trip.Previewdescription}</p>
            </div>
          </Link>
        </motion.div>
        ))}
      </section>

    </main>
  );
}
