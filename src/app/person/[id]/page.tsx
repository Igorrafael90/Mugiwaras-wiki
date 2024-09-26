import { useRouter } from "next/router";
import Image from "next/image";
import { Personsop, Person } from "@/data";
import { notFound } from "next/navigation";

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
        <main className="grid grid-flow-col gap-6 justify-center items-center w-full h-full">
            <section className={`flex flex-col border-4 border-black items-center w-52 h-auto bg-gray-200 shadow-md ${trip.variantS}`}>
                <Image src={`/wantedposters/${trip.Name}.jpg`} className="h-52 my-2 border-white border-4" width={150} height={50} alt=""/>
                <h1 className="text-center bg-white -my-2 w-28 font-bold rounded-b-lg uppercase">{trip.Name}</h1>
                <h2 className="font-semibold my-2 border-b-2 border-black">Alcunha</h2>
                <p className="text-xs">{trip.Alcunha}</p>
                <h2 className="font-semibold border-b-2 border-black">Altura</h2>
                <p className="text-xs">{trip.Altura}m</p>
                <h2 className="font-semibold border-b-2 border-black">Peso</h2>
                <p className="text-xs">{trip.Peso}kg</p>
                <h2 className="font-semibold border-b-2 border-black">Haki</h2>
                <p className="text-center text-xs w-32">{trip.Haki}</p>
                <h2 className="font-semibold border-b-2 border-black">Akuma no mi</h2>
                <p className="text-xs mb-2">{trip.Devilfruit}</p>
            </section>
            <section className={`grid gap-20 grid-cols-2 w-auto h-auto border-4 border-black bg-gray-200 shadow-md ${trip.variantS}`}>
                <div>
                    <h1 className="w-52 border-b-2 border-black font-bold uppercase">Bio</h1>
                    <p className="w-72 min-w-44 break-words">{trip.Fulldescription}</p>
                </div>
                <Image src={`/ilustrativeimages/${trip.Name}.png`} width={300} height={0} alt="" />
            </section>
        </main>
    )
}