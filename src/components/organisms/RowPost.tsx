import React from 'react';
import CustomButton from '../atoms/CustomButton';
import ImageThumpnail from '../molecules/ImageThumpnail';

type RowPostProps = {
  welcomeLine: string;
};

const RowPost: React.FC<RowPostProps> = ({ welcomeLine }) => {
  const productList = [
    { image: '/assets/images/Jewellery-image.png', description: 'Craft Your Dream Jewelry: Design the Perfect Piece' },
    { image: '/assets/images/jewellery-image1.png', description: 'Craft Your Dream Jewelry: Design the Perfect Piece' },
    { image: '/assets/images/jewellery-image2.png', description: 'Craft Your Dream Jewelry: Design the Perfect Piece' },
    { image: '/assets/images/jewellery-image.png', description: 'Craft Your Dream Jewelry: Design the Perfect Piece' },
    { image: '/assets/images/jewellery-image1.png', description: 'Craft Your Dream Jewelry: Design the Perfect Piece' },

  ];

  return (
    <div className="flex flex-col gap-3 w-full">
      <div className="flex justify-between">
        <div className="text-[4vw] sm:text-[1.5rem]  text-[#ffffff] font-[700] font-satoshi">{welcomeLine}</div>
        <div className=""><CustomButton variant="secondary" text="View All" /></div>
      </div>
      <div className="grid grid-cols-[auto] sm:grid-cols-[repeat(auto-fit,minmax(200px,auto))]
      gap-5 auto-rows-auto place-items-center overflow-hidden"
      >
        {productList.map((product, index) => (
          <ImageThumpnail key={index} image={product.image} description={product.description} />
        ))}
      </div>
    </div>
  );
};

export default RowPost;
