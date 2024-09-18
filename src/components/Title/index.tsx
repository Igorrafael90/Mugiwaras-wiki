"use client"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import React from "react";

export default function Title() {
 

    return (
        <header className="bg-neutral-900 h-20 w-full">
            <div className="flex justify-around">
                <Link href={`/`}>
                    <FontAwesomeIcon size="2xl" className="text-white my-4" icon={faHouse}></FontAwesomeIcon>
                </Link>
                <h1 className="text-4xl uppercase text-white my-4">One piece</h1>
                <div></div>
            </div>
        </header>
    );
}