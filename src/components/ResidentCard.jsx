import axios from "axios";
import { useEffect, useState } from "react";

const ResidentCard = ({ residentUrl }) => {
  /* estado */
  const [residentInfo, setResidentInfo] = useState(null);

  /* objeto para el status del resident cambio de color*/
  /* esto sirve apra los bgs de la app weather */
  /* posibilidades finitas */
  const residentStatus = {
    Alive: "bg-green-500",
    Dead: "bg-red-500",
    unknown: "bg-slate-500",
  };

  /* efect */
  useEffect(() => {
    axios
      .get(residentUrl)
      .then(({ data }) => setResidentInfo(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <article className="border-[1px] border-[#8EFF8B]">
      <div>
        <section>
          <header>
            <img
              className="border-[1px] border-[#8EFF8B]"
              src={residentInfo?.image}
              alt=""
            />
            <div className="grid grid-cols-[20px,20px] items-center gap-1 p-2">
              <div
                className={`h-[10px] aspect-square rounded-full ${
                  residentStatus[residentInfo?.status]
                }`}
              ></div>
              {residentInfo?.status}
            </div>
          </header>
        </section>

        <section>
          <h3>{residentInfo?.name}</h3>
          <ul>
            <li>{residentInfo?.species}</li>
            <li>origin {residentInfo?.origin.name}</li>
            <li>times {residentInfo?.episode.length}</li>
          </ul>
        </section>
      </div>
    </article>
  );
};
export default ResidentCard;
