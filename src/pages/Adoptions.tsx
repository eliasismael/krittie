import adoptionsImg from "../assets/adopciones-img.jpg";

function Adoptions() {
  return (
    <div className="flex flex-col items-center gap-10 my-20">
      {/* TITLE */}

      <h2 className="adigiana text-[#ad53a6] text-5xl">Adopciones</h2>
      {/* MAIN TEXT */}

      <p className="text-xl font-semibold text-center">
        Adopciones transparentes mediante blockchain, este procedimiento se
        realiza mediante un registro detallado que incluye vacunas,
        esterilizaciones y otros servicios médicos, documentados a través de un
        NFT otorgado en cada visita al veterinario.
      </p>

      {/* IMAGES */}
      <div>
        <img src={adoptionsImg} width={800} />
      </div>

      {/* SECONDARY TEXT */}
      <p className="text-lg text-center">
        Los NFT que se reciben sirven como evidencia de ser adoptante
        responsable, y esta acción se reconoce a través de una cuponera de
        tokens proporcionada por Kritties a los adoptantes que poseen esos NFT.
        De esta manera, pueden disfrutar de descuentos en alimentos y servicios
        para sus mascotas. Esta iniciativa fomenta las adopciones y contribuye a
        reducir el abandono de las mascotas.
      </p>
    </div>
  );
}

export default Adoptions;
