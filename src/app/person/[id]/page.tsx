import { useRouter } from "next/router";
import { Personsop, Person } from "@/data";
import { notFound } from "next/navigation";

interface Pageprops{
    params: {
        id: number;
    }
}

export default async function PersonPage({params}: Pageprops){
    const trip: Person | undefined = Personsop.find(
        (trip) => trip.id == params.id)
        if(!trip){
            return notFound()
        }
        return(
            <div>
                <h1>{trip.Name}</h1>
            </div>
        )
}