import Cobblestone from "../art/Cobblestone"
import night from "../images/night.png"


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

export default function Ambitions() {
  return (
    <div className="flex flex-row justify-between text-center bg-neutral-700 text-yellow-100">
        <CobblestoneStack />
        <div className="flex flex-col items-center">
            <h3 className="text-xl sm:text-2xl">Ambitions</h3>
            <p>Here are some ambitions of the SMP</p>
            <ul className="w-80 sm:w-96">
                <li className="list-disc">Have a kingdom claim an entire continent</li>
                <li className="list-disc">Develope an entire continent with cities and towns</li>
                <li className="list-disc">Create a large city</li>
                <li className="list-disc">Create a railroad system</li>
                <li className="list-disc">Build a world spawn center</li>
                <li className="list-disc">Build a Nether highway with style</li>
                <li className="list-disc">Explore at least 16,384 x 16,384 of the Overworld</li>
                <li className="list-disc">Terraform the main end island</li>
                <li className="list-disc">Create the death start in the End</li>
                <li className="list-disc">Make an obsidian fortress in the Nether</li>
                <li className="list-disc">Make a musical opera house</li>
                <li className="list-disc">Make a solar system model in the End</li>
                <li className="list-disc">Start an industrial revolution</li>
                <li className="list-disc">Colonize the Nether with villagers</li>
                <li className="list-disc">Colonize the End with villagers</li>
                <li className="list-disc">Create a sky island with a city</li>
                <li className="list-disc">Have your own ambitions...</li>
            </ul>
            {/* <h3 className="text-2xl">Gallery</h3> */}
            <div className="m-3">
                <img src={night} alt="" />
            </div>
        </div>
        <CobblestoneStack />
    </div>
  )
}
