const VarientsButton = () => {
  const variants = [1, 2, 3, 4];
  return (
    <div className="flex gap-[10px] w-[100%]">
      {variants.map(num => (
        <button
          type="button"
          key={num}
          className="flex justify-center text-[#ffffff] text-[1rem] font-bold font-satoshi cursor-pointer
           bg-[#10151F] border-[1px] border-[#1C212A] py-[1.187rem] w-[100%]"
        >
          {num}
        </button>
      ))}
    </div>
  );
};

export default VarientsButton;

// py-[1.187rem] px-[1.937rem]
