import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHouse } from "@fortawesome/free-solid-svg-icons"
import Link from "next/link"

export default function Title(){
    return(
        <header className="bg-neutral-900 h-14 w-full">
            <div className="flex items-center justify-around">
                <Link href={`/`}>
                    <FontAwesomeIcon className="text-white" icon={faHouse}/>
                </Link>
                <h1 className="text-4xl uppercase text-white">One piece</h1>
                <div/>
            </div>
        </header>
    )
}