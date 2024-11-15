import Cobblestone from "../art/Cobblestone"
import { Link } from "react-router-dom"

function CobblestoneStack() {
    return (
        <div className="flex flex-col">
            <Cobblestone />
            <Cobblestone />
            <Cobblestone />
        </div>
    )
}

export default function PageNotFound() {
  return (
    <div className="flex flex-row justify-between text-center bg-neutral-700 text-yellow-100">
        <CobblestoneStack />
        <div className="flex flex-col items-center">
            <h1 className="text-3xl">Opps...</h1>
            <p>Looks like the page you are trying to look for either does not exist or you entered the wrong place</p>
            <h1 className="text-3xl text-red-600">:(</h1>
            <h1 className="text-2xl mt-8">Click the button to return to the home page</h1>
            <Link className="bg-slate-500 border-2 border-slate-200 text-slate-300 text-xl hover:bg-slate-300 hover:text-slate-500 hover:border-slate-500 active:bg-zinc-500 active:border-yellow-200 active:text-yellow-200 px-2 py-1 w-32" to="/">CLICK</Link>
        </div>
        <CobblestoneStack />
    </div>
  )
}
