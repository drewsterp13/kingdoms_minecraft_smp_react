import Cobblestone from "../art/Cobblestone"
import fort from "../images/fort.png"
import { Link } from "react-router-dom";

function CobblestoneStack() {
    return (
        <div className="flex flex-col">
            <Cobblestone />
            <Cobblestone />
            <Cobblestone />
            <Cobblestone />
            <Cobblestone />
        </div>
    )
}

export default function Home() {
  return (
    <div className="flex flex-row justify-between text-center bg-neutral-700 text-yellow-100 z-10">
        <CobblestoneStack />
        <div className="flex flex-col items-center ">
            <div className="relative">
                <img className="z-0" src={fort} alt="22" />
                <div className="text-white z-10 absolute w-full h-full top-0 bg-neutral-700 bg-opacity-75">
                    <div className="absolute top-1/4 w-full bg-transparent">
                        <h3 className="text-2xl">Welcome to...</h3>
                        <h1 className="text-4xl text-yellow-300">KINGDOMS SMP</h1>
                        <h3 className="text-xl text-zinc-300">A Minecraft Server</h3>
                        <h5 className="text-l text-cyan-300">by drewsterp</h5>
                    </div>
                </div>
            </div>

            
            <h3 className="text-2xl mt-8">Greetings kingdom builders</h3>
            <p>Welcome to drewsterp's KINGDOMS SMP Minecraft Sever where you can be part of a kingdom to build a cool city, or the most formittable forts, or conquer the end.</p>
            <h3 className="text-2xl mt-8">Coming soon in Feburary, 2025</h3>

            <Link className="bg-slate-500 border-2 border-slate-200 text-slate-300 text-xl hover:bg-slate-300 hover:text-slate-500 hover:border-slate-500 active:bg-zinc-500 active:border-yellow-200 active:text-yellow-200 px-2 py-1 my-10" to="/features">FEATURES</Link>
            
        </div>
        <CobblestoneStack />
    </div>
  )
}
