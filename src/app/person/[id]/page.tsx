"use client"

import { useRouter } from "next/router";
import Image from "next/image";
import { faHouse } from "@fortawesome/free-solid-svg-icons"
import { Personsop, Person } from "@/data";
import { notFound } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion"
import Link from "next/link";
import { useState } from "react";

interface Pageprops {
    params: {
        id: number;
    }
}

export default async function PersonPage({ params }: Pageprops) {
    const trip: Person | undefined = Personsop.find(
        (trip) => trip.id == params.id)
    if (!trip) {
        return notFound()
    }
    const cardVariants = {
        hidden: { opacity: 0, y: 100 },
        visible: { opacity: 1, y: 0 },
      };
    const verify = trip.Haki

    return (
        <main className="grid grid-cols-1 w-full">
            <header className="bg-neutral-900 h-14 w-full">
                <div className="flex items-center justify-around">
                    <Link href={`/`}>
                        <FontAwesomeIcon className="text-white" icon={faHouse} />
                    </Link>
                    <h1 className="text-4xl uppercase text-white">One piece</h1>
                    <div />
                </div>
            </header>
            <motion.div
          key={trip.Name}
          className="block"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1}}
          variants={cardVariants}
        >
            <section className="flex flex-col justify-center items-center w-full">
                <h1 className="text-white">Info</h1>
                <div className="flex justify-center w-2/3 h-28 bg-slate-100">
                    <ul className="grid grid-cols-2 ">
                        <li>Nome</li>
                        <li>Alcunha</li>
                        <li>Altura</li>
                        <li>Peso</li>
                        <li>Idade</li>
                        <li>Recompensa</li>
                    </ul>
                </div>
                <h1 className="text-white">Atributos</h1>
                <div className="pt-1 w-2/3 grid grid-cols-2 space-x-1">
                    <div className="h-48 bg-slate-100 ">
                        <ul>
                            <li>Haki do armamento: {trip.Haki ? "Possui" : "Nao possui"}</li>
                            <li>Haki da visao: {trip.Haki2 ? "Possui" : "Nao possui"}</li>
                            <li>Haki do rei: {trip.Haki3 ? "Possui" : "Nao possui"}</li>
                            <li>Devil fruit: {trip.Devilfruit ? "Possui" : "Nao possui"}</li>
                        </ul>
                    </div>
                    <div className="flex justify-center">
                        <img className="h-64" src={`/wantedposters/${trip.Name}.jpg`} alt={`${trip.Name}`} />
                    </div>
                </div>
                <h1 className="text-white">Historia</h1>
                <div className="w-2/3 h-48 bg-slate-100">
                    <p></p>
                </div>
            </section>
            </motion.div>
        </main>
    )
}