import React from 'react';
import Map from '../molecules/Map';
import WineItem from '../molecules/WineItem';

function WineCard() {
  const wineList = [
    { image: '/assets/images/bottle1.png', name: 'Casilla del guapo', place: 'Gran feudo Navarra, España', rating: 0, Percentage: 85 },
    { image: '/assets/images/bottle2.png', name: 'Artuke', place: 'Bodegas Artuke Rioja, España', rating: 4, Percentage: 50 },
    { image: '/assets/images/bottle3.png', name: 'Piedra negra', place: 'Lurton Mendoza, Argentina', rating: 0, Percentage: 85 },
  ];

  return (
    <div className="w-[1495px] h-[612px] rounded-[10.24px] shadow-[0_0_25px_5px_rgba(0,0,0,0.2)] m-10">
      <div className="flex flex-col mt-[1.84rem] ml-[1.80rem]">
        <div className="grow font-[500] text-[#394A59] text-[29px]">Tu caja de Febrero</div>
        <div className="font-[400] text-[#394A59] text-[19px]">Caja comprada el 17/01/2024</div>
      </div>
      <div className="flex">
        <div className="flex w-fit h-fit rounded-[10px] shadow-sm m-10">
          {wineList.map(obj => (
            <WineItem
              key={obj.name}
              image={obj.image}
              name={obj.name}
              place={obj.place}
              rating={obj.rating}
              Percentage={obj.Percentage}
            />
          ))}
        </div>
        <div>
          <Map />
        </div>
      </div>
      <div className="ml-[450px]">
        <button className="bg-[#F78A79] text-[#FFFFFF] h-[56px] w-[309px] rounded-[9.6px]">¡Envíame esta caja a casa!</button>
      </div>
    </div>
  );
};

export default WineCard;
