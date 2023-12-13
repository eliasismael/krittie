import btc from "../assets/donations-btc.jpg";
import eth from "../assets/donations-eth.jpg";
import usdt from "../assets/donations-usdt.jpg";
import busd from "../assets/donations-busd.jpg";
import qr from "../assets/donations-qr.jpg";

function Donations() {
  return (
    <div className="flex flex-col items-center gap-10">
      {/* TITLE */}
      <h2 className="adigiana text-[#ad53a6] text-5xl">Donaciones</h2>
      {/* MAIN TEXT */}
      <p className="text-2xl font-semibold text-center">
        Aceptamos contribuciones a través de criptomonedas, aprovechando su
        capacidad intrínseca para ser rastreadas. Esta característica
        proporciona un nivel adicional de transparencia y confianza en el
        proceso de donación. Todas las donaciones se destinan directamente a los
        refugios, maximizando su utilidad en colaboración con Krittie.
      </p>
      {/* IMAGES */}

      <div className="flex gap-6 items-center">
        {/* COLUMN ONE */}
        <div className="flex flex-col justify-between gap-4">
          {/* BTC */}
          <div className="flex flex-col items-center">
            <img src={btc} alt="btc" width={80} />
            <p className="adigiana ">BTC</p>
          </div>
          {/* ETH */}
          <div className="flex flex-col items-center">
            <img src={eth} alt="eth" width={60} />
            <p className="adigiana ">ETH</p>
          </div>
        </div>

        {/* QR */}
        <div>
          <img src={qr} width={200} />
        </div>

        {/* COLUMN TWO */}
        <div className="flex flex-col justify-between gap-4">
          {/* BTC */}
          <div className="flex flex-col items-center">
            <img src={usdt} alt="usdt" width={80} />
            <p className="adigiana ">USDT</p>
          </div>
          {/* ETH */}
          <div className="flex flex-col items-center">
            <img src={busd} alt="busd" width={80} />
            <p className="adigiana ">BUSD</p>
          </div>
        </div>
      </div>
      {/* SECONDARY TEXT */}
      <p className="text-lg">0x4EBC3AaD5F0E85261291cc2569929a98A6c2899B</p>
    </div>
  );
}

export default Donations;
