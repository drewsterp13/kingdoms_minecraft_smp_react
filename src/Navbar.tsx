import { Link, Outlet } from "react-router-dom"
import { useState, useEffect } from "react";

export default function Navbar() {
    const url = `https://api.mcsrvstat.us/3/37.10.120.43:35557`;

    const [count, setCount] = useState(0)

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch(url)
            result.json().then(json => {
                console.log(json["players"]["online"])
                setCount(json["players"]["online"])
            })
        }
        fetchData();
    })

  return (
    <div className="m-0 p-0 font-serif z-0 text-sm sm:text-base">
        <div className="bg-neutral-800 flex flex-row justify-between text-center text-white">
            <div className="">
                <h1 className="text-xl sm:text-2xl text-yellow-300">KINGDOMS SMP</h1>
                <h3 className="text-base sm:text-xl text-zinc-300">A Minecraft Server</h3>
                <h5 className="text-base" style={{color: "#194dff"}}>by drewsterp</h5>
            </div>
            <div className="">
                <h3 className="text-base sm:text-xl text-zinc-300">Players</h3>
                <h5 className="text-base sm:text-xl text-yellow-400">{count}</h5>
            </div>
            <div className="flex flex-col md:flex-row">
                <Link className="mx-2 text-yellow-200 hover:text-slate-200 active:text-cyan-200" to="/">home</Link>
                <Link className="mx-2 text-yellow-200 hover:text-slate-200 active:text-cyan-200" to="/features">features</Link>
                <Link className="mx-2 text-yellow-200 hover:text-slate-200 active:text-cyan-200" to="/ambitions">ambitions</Link>
            </div>
        </div>
        <Outlet />
        <div className="bg-neutral-800 text-white flex flex-row justify-around text-center">
            <div className="flex flex-col sm:flex-row">
                <div className="mx-5">
                    <h1 className="">OVERVIEW MAP</h1>
                    <h2 className="font-mono">----------</h2>
                    <h3 className="">Coming soon...</h3>
                </div>

                <div className="mx-5">
                    <h1 className="">JAVA IP ADDRESS</h1>
                    <h2 className="font-mono">12.34.567.89:01234</h2>
                    <h3 className="">Coming soon...</h3>
                </div>
            </div>
            <div className="flex flex-col sm:flex-row">
                <div className="mx-5">
                    <h1 className="">BEDROCK IP ADDRESS</h1>
                    <h2 className="font-mono">12.34.567.89</h2>
                    <h3 className="">Coming soon...</h3>
                </div>

                <div className="mx-5">
                    <h1 className="">BEDROCK PORT</h1>
                    <h2 className="font-mono">01234</h2>
                    <h3 className="">Coming soon...</h3>
                </div>
            </div>
            

            

            {/* <API /> */}
        </div>
        {/* <div className="bg-neutral-800 text-white flex flex-row justify-around text-center">
            <div className="">
                <h1 className="text-l">JAVA IP ADDRESS</h1>
                <h2 className="text-l font-mono">12.34.567.89:01234</h2>
                <button className="text-yellow-200 text-l hover:text-slate-200 active:text-cyan-200" 
                onClick={async () => { await navigator.clipboard.writeText("123456")}}
                >Click to Copy</button>
            </div>

            <div className="">
                <h1 className="text-l">BEDROCK IP ADDRESS</h1>
                <h2 className="text-l font-mono">12.34.567.89</h2>
                <button className="text-yellow-200 text-l hover:text-slate-200 active:text-cyan-200" 
                onClick={async () => { await navigator.clipboard.writeText("123456")}}
                >Click to Copy</button>
            </div>

            <div className="">
                <h1 className="text-l">BEDROCK PORT</h1>
                <h2 className="text-l font-mono">01234</h2>
                <button className="text-yellow-200 text-l hover:text-slate-200 active:text-cyan-200" 
                onClick={async () => { await navigator.clipboard.writeText("123456")}}
                >Click to Copy</button>
            </div>

            <div className="">
                <h1 className="text-l">OVERVIEW MAP</h1>
                <h2 className="text-l font-mono">----------</h2>
                <a href="http://37.10.120.43:30631/?worldname=world&mapname=flat&zoom=4&x=0&y=64&z=0#" className="text-yellow-200 text-l hover:text-slate-200 active:text-cyan-200">
                Visit Map
                </a>
            </div>
        </div> */}
    </div>
  )
}

// This is the link to the overview map
// http://37.10.120.43:30631/?worldname=world&mapname=flat&zoom=4&x=0&y=64&z=0#
{/* <i className="fa-solid fa-earth-americas text-3xl"></i> */}