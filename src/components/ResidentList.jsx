import { useEffect, useState } from "react";
import ResidentCard from "./ResidentCard";
import Pagination from "./Pagination";

/* magic string */
const INITIAL_PAGE = 1;

const ResidentList = ({ residents, currentLocation }) => {
  /* logica para paginacion, mostrar paginas abajo */
  const [currentPage, setCurrentPage] = useState(INITIAL_PAGE);

  //cantidad de residentes por pagina
  const RESIDENTS_PER_PAGE = 20;

  //cantidad total de paginas
  const totalPages = Math.ceil(residents.length / RESIDENTS_PER_PAGE);

  //residentes que se van a mostrar en la pagina actual
  const sliceStart = (currentPage - 1) * RESIDENTS_PER_PAGE;
  const sliceEnd = sliceStart + RESIDENTS_PER_PAGE;
  const residentsInPage = residents.slice(sliceStart, sliceEnd);

  //generacion del arreglo de las paginas que se va a mostrar
  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  //efecto para que regrese a la pagina 1 cafa que se haga una nueva busqueda
  useEffect(() => {
    /*  */
    setCurrentPage(INITIAL_PAGE);
  }, [currentLocation]);

  return (
    <section>
      <section className="grid gap-4 grid-cols-[repeat(auto-fill,_210px)] max-w-[1200px] mx-auto my-auto place-content-center">
        {residentsInPage.map((resident) => (
          <ResidentCard key={resident} residentUrl={resident} />
        ))}
      </section>
      <section>
        <Pagination
          pages={pages}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </section>
    </section>
  );
};
export default ResidentList;
