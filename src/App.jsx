import HotelCard from "./HotelCard";
import User from "./Manupa";
import { Button } from "./components/ui/button";
import { hotels } from "./data";
import Navigation from "./components/Navigation";
import { Hero } from "./components/Hero";
import HotelListings from "./components/HotelListings";

function App() {
  return (
    <>
      <Navigation />
      <main>
        <div className="relative min-h-[85vh]">
          <Hero />
        </div>
        <HotelListings />
      </main>
    </>
  );
}

export default App;
