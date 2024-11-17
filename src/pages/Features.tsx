import Cobblestone from "../art/Cobblestone"
import tavern from "../images/tavern.png"
import ocean_sunset from "../images/ocean_sunset.png"
import secret from "../images/secret.png"
import updated_biomes from "../images/updated_biomes.png"

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

export default function Features() {
  return (
    <div className="flex flex-row justify-between text-center bg-neutral-700 text-yellow-100">
        <CobblestoneStack />
        <div className="flex flex-col items-center">
            <h3 className="text-xl sm:text-2xl">Features</h3>
            <p>Here are some features of the SMP</p>
            <ul className="w-80 sm:w-96">
                <li className="list-disc">There are more structures in all dimensions</li>
                <li className="list-disc">The Overworld consist of continents and oceans</li>
                <li className="list-disc">There are factions that you can join</li>
                <li className="list-disc">The Overworld biomes have been slightly modified</li>
                <li className="list-disc">Attack cooldown is sped up</li>
                <li className="list-disc">Not all players have to sleep to skip the night</li>
                <li className="list-disc">Factions can claim and fight for territory</li>
                <li className="list-disc">Players have ambitious projects</li>
                <li className="list-disc">Factions can go on a race to the End</li>
                <li className="list-disc">There is an overview map of the Overworld</li>
                <li className="list-disc">Both Java and Bedrock players can join</li>
                <li className="list-disc">And there is more...</li>
                <li className="list-disc text-purple-100">Also, there is a little secret you have to discover...</li>
            </ul>
            <h3 className="text-xl sm:text-2xl">Gallery</h3>
            <div className="flex flex-col">
                <div className="flex flex-col md:flex-row">
                    <div className="flex flex-col m-3">
                        <img src={tavern} alt="" />
                        <h3>A naturally generated tavern</h3>
                    </div>
                    <div className="flex flex-col m-3">
                        <img src={updated_biomes} alt="" />
                        <h3>Updated biomes</h3>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row">
                    <div className="flex flex-col m-3">
                        <img src={ocean_sunset} alt="" />
                        <h3>A beautiful ocean sunset</h3>
                    </div>
                    <div className="flex flex-col m-3">
                        <img src={secret} alt="" />
                        <h3>What is the secret???</h3>
                    </div>
                </div>
            </div>
        </div>
        <CobblestoneStack />
    </div>
  )
}
