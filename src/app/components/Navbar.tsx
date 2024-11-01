import Link from "next/link"
export default function Navbar(){
  return(
    <div>
     <header>
      <nav id="navbar">
        <Link id="logo" href="">H-WEAR</Link>
        <Link className="ms-60"href="/">Home</Link>
        <Link className="ms-40"href="/contact">contact us</Link>
        <Link  className="ms-40"href="/about">about us</Link>
        <input id="searchbar"className="ms-10" placeholder="search" type="search"></input>
        <button className=" hover:bg-blue-800" id="button">search</button>
      </nav>
      </header>
    </div>
  )
}