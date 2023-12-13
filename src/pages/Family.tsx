import familyImg from "../assets/family-img.jpg";
import familyWomen from "../assets/familyWomen-img.jpg";

function Family() {
  return (
    <div className="flex flex-col items-center gap-8">
      {/* TITLE */}

      <h2 className="adigiana text-[#ad53a6] text-5xl">Familia</h2>

      <div>
        <img src={familyWomen} width={150} />
      </div>
      {/* MAIN TEXT */}

      <p className="text-xl text-center font-semibold">
        El servicio de Krittie promueve el cuidado de tus mascotas. Aquellas
        personas interesadas en recibir los beneficios de Krittie pueden hacerlo
        mediante la adquisición de Kritties a través de Mercado Pago
      </p>

      {/* IMAGES */}
      <div>
        <img src={familyImg} width={700} />
      </div>
    </div>
  );
}

export default Family;
