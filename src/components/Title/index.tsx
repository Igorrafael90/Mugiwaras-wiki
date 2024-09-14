import Link from "next/link";

export default function Title() {
    return (
        <header className="bg-gray-800 pt-10 pb-12">
           <div className="flex justify-evenly w-full mx-auto px-6">
                <h1 className="text-white text-4xl uppercase hover:text-blue-500"><span className="text-5xl hover:text-red-500">O</span>ne piece</h1>
                <h2>a</h2>
           </div>
        </header>
    );
}