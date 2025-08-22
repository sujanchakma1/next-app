import Image from "next/image";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import LatestProducts from "./Components/LatestProducts";

export default function Home() {
  return (
    <div>
      <Hero></Hero>
      <LatestProducts></LatestProducts>
    </div>
  );
}
