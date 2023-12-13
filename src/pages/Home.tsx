import mascotas from "../assets/mascotas.png";
import perroHerido from "../assets/perro-herido.png";

function Home() {
  return (
    <div className="flex flex-col">
      <div className=" flex items-center justify-center">
        <img src={mascotas} alt="Mascotas" className=" w-10/12 ml-auto" />
        <img
          src={perroHerido}
          alt="perro herido"
          className="w-2/12 self-end mr-auto "
        />
      </div>

      <div className="mt-10 text-lg text-center">
        Krittie actúa como el vínculo esencial entre los refugios y las
        personas. Nuestro objetivo es promover la transparencia y la generosidad
        mediante la tecnología blockchain. Los donativos que recibimos son
        totalmente rastreables gracias a la utilidad de una red criptográfica
        accesible para toda la comunidad. Además, extendemos esta misma
        tecnología para realizar un seguimiento transparente de las mascotas
        adoptadas, beneficiando a los adoptantes responsables con descuentos
        exclusivos en alimentos para mascotas, también extendemos el uso de
        krittie a todas las familias. Con Krittie, estamos construyendo un
        puente digital basado en la confianza y la innovación para el bienestar
        de todas las vidas peludas.
      </div>
    </div>
  );
}

export default Home;
