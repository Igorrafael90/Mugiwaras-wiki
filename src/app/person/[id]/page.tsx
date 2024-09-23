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
        <section className="flex justify-center items-center w-full h-full">
            <div className={`flex border-4 border-orange-100 flex-col w-1/4 h-auto min-w-80 bg-amber-100 ${trip.variantS} shadow-lg overflow-hidden`}>
                <div className="flex w-full h-44">
                    <Image className="border-4 border-black" src={`/wantedposters/${trip.Name.toLowerCase()}.jpg`} width={125} height={50} alt="" />
                    <h1 className="text-3xl text-white bg-black h-10 w-32 rounded-e-3xl font-bold items-end text-left ">{trip.Name}</h1>
                </div>
                <div className="flex w-full mt-5">
                    <ul>
                        <li className="text-lg font-bold border-b-2 border-black w-24">Alcunha</li>
                        <p className="text-sm font-normal">aaaaaaaaaaa</p>
                        <li className="text-lg font-bold border-b-2 border-black w-20">Altura</li>
                        <p className="text-sm font-normal">aaaaaaaaaaa</p>
                        <li className="text-lg font-bold border-b-2 border-black w-14">Peso</li>
                        <p className="text-sm font-normal">aaaaaaaaaaa</p>
                        <li className="text-lg font-bold border-b-2 border-black w-14">Haki</li>
                        <p className="text-sm font-normal">aaaaaaaaaaa</p>
                        <li className="text-lg font-bold border-b-2 border-black w-32">Akuma no mi</li>
                        <p className="text-sm font-normal">aaaaaaaaaaa</p>
                    </ul>
                    <Image className="-mt-24" src={`/ilustrativeimages/${trip.Name.toLowerCase()}.png`} width={300} height={50} alt="" />
                </div>
                <div className="flex mt-10 flex-col">
                    <h2 className="text-right border-b-2 border-black text-3xl font-semibold">Bio</h2>
                    <p>Lorem impsum</p>
                </div>
            </div>
        </section>
    )
}