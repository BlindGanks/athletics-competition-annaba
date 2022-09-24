const ParticipationsListMobileView = () => {
  return (
    <div className="lg:hidden h-full w-full px-[30px] pb-[5rem]">
      <div className="h-full w-full overflow-y-scroll py-7 space-y-[15px]">
        <Participation />
        <Participation />
        <Participation />
        <Participation />
        <Participation />
        <Participation />
        <Participation />
        <Participation />
        <Participation />
        <Participation />
        <Participation />
      </div>
    </div>
  );
};

const Participation = () => (
  <div className="w-full h-20 rounded-[10px] bg-white px-4 py-[12px] flex flex-row justify-between">
    {/* participater info */}
    <div className="flex flex-col justify-between">
      <span className="font-helvetica font-bold text-xl">Ramzi Kaouachi</span>
      <div className="flex flex-row justify-between">
        <span className="font-helvetica font-normal text-base text-[#959798]">
          M
        </span>
        <span className="font-helvetica font-normal text-base text-[#959798]">
          mm/dd/yy
        </span>
      </div>
    </div>
    {/* shirt number container */}
    <div className="flex items-center">
      <div className="h-[21px] w-[47px] text-center font-helvetica text-[15px] font-normal border-[1px] border-[#D5D5D5] rounded-full">
        <span>1</span>
      </div>
    </div>
  </div>
);

export default ParticipationsListMobileView;
