import Image from 'next/image';

const Map = () => {
  return (
    <div className="flex">
      <div className="mr-20 w-[28.44rem] h-[22.8rem] rounded-[40.32px] shadow-sm">
        <Image
          src="/assets/images/map.png"
          alt="map-Image"
          width={385}
          height={309}
          className="ml-[40px]"
        />
      </div>
    </div>
  );
};

export default Map;
