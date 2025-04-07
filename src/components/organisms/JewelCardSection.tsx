import JewelCard from '../molecules/JewelCard';

const JewelCardPage = () => {
  const cards = [
    { id: 1, diamonds: 1, title: '5 Jewels', free: true },
    { id: 2, diamonds: 2, title: '40 Lumens', priceForEach: '$15.990.40' },
    { id: 3, diamonds: 1, title: '40 Lumens', priceForEach: '$15.990.40' },
    { id: 4, diamonds: 2, title: '40 Lumens', priceForEach: '$15.990.40', getJewelPrice: '$14.99', popular: true },
    { id: 5, diamonds: 2, title: '40 Lumens', priceForEach: '$15.990.40', getJewelPrice: '$14.99' },
    { id: 6, diamonds: 1, title: '40 Lumens', priceForEach: '$15.990.40', getJewelPrice: '$14.99', popular: true },
  ];
  return (
    <div className="grid grid-cols-2 new-md:grid-cols-3 new-xl:grid-cols-4 gap-space-10 justify-center">
      {cards.map(obj => (
        <div key={obj.id} className="max-w-[279px]">
          <JewelCard
            title={obj.title}
            diamonds={obj.diamonds}
            priceForEach={obj.priceForEach}
            getJewelPrice={obj.getJewelPrice}
            popular={obj.popular}
            free={obj.free}
          />
        </div>
      ))}
    </div>
  );
};

export default JewelCardPage;

// h-[16rem] w-[17.43rem]
