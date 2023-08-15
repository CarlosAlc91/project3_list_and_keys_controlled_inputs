const Pagination = ({ pages, setCurrentPage, currentPage }) => {
  return (
    <section>
      <ul className="flex gap-4 place-content-center py-8 cursor-pointer">
        {pages.map((page) => (
          /* callback para el onClick*/
          /* siempre que vayamos a pasat una funcion con argumento a un evento, se usa un callback */
          <div className="flex-wrap px-5 py-3  text-white bg-[#062226]">
            <li
              className={`${
                currentPage === page && "flex-wrap cursor-pointer "
              }`}
              onClick={() => setCurrentPage(page)}
              key={page}
            >
              {page}
            </li>
          </div>
        ))}
      </ul>
    </section>
  );
};
export default Pagination;
