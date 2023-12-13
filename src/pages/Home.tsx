import mascotas from "../assets/mascotas.png";

function Home() {
  return (
    <div className="flex flex-col">
      <div className="h-[420px] relative overflow-hidden">
        <img
          src={mascotas}
          alt="Mascotas"
          className="w-full absolute -top-80"
        />
      </div>

      <div className="text-lg">
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
