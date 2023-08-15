import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { getRandomDimension } from "./utils/random";
import LocationForm from "./components/LocationForm";
import LocationInfo from "./components/LocationInfo";
import ResidentList from "./components/ResidentList";

function App() {
  /* estados */
  const [currentLocation, setCurrentLocation] = useState(null);
  /* handlers */

  const handlerSubmit = (e) => {
    /*  */
    e.preventDefault();
    const newLocation = e.target.newLocation.value;

    fetchDimension(newLocation);
  };
  const fetchDimension = (idLocation) => {
    const URL = `https://rickandmortyapi.com/api/location/${idLocation}`;

    axios
      .get(URL)
      .then(({ data }) => setCurrentLocation(data))
      .catch((err) => console.log(err));
  };

  /* efectos */
  useEffect(() => {
    /* DEBE DE SER ALEATORIO */
    const randomDimension = getRandomDimension(126);
    fetchDimension(randomDimension);
  }, []);

  return (
    <main className="bg-main bg-cover w-auto h-full text-white font-fira-code">
      <LocationForm handlerSubmit={handlerSubmit} />
      <LocationInfo currentLocation={currentLocation} />
      <ResidentList
        residents={currentLocation?.residents ?? []}
        currentLocation={currentLocation}
      />
    </main>
  );
}
export default App;
