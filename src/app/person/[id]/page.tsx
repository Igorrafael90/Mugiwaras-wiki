import { useRouter } from "next/router";
import Image from "next/image";
import { faHouse } from "@fortawesome/free-solid-svg-icons"
import { Personsop, Person } from "@/data";
import { notFound } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

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
        </main>
    )
}