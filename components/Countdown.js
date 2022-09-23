const Countdown = () => {
  return (
    <div className="flex flex-row justify-between">
      <Timer text="Days" time={90} />
      <Timer />
      <Timer />
      <Timer />
    </div>
  );
};
const Timer = ({ time, text }) => (
  <div className="w-[75px] h-[68px] md:w-[115px] md:h-[108px] lg:h-[163px] lg:w-[170px] xl:h-[210px] xl:w-[233px] bg-redPrimary text-center flex flex-col justify-center text-white">
    <span className="block font-futura text-4xl md:text-[3.25rem] lg:text-[6.6rem] md:leading-[3rem] lg:leading-[6.25rem]">
      {time}
    </span>
    <span className="font-helvetica text-[0.5rem] md:text-[1rem] lg:text-2xl">
      {text}
    </span>
  </div>
);
export default Countdown;
