const ParticipationsListDesktopView = () => {
  return (
    <div className="hidden lg:flex h-full w-full pb-[7rem] px-[30px] 2xl:pb-[12rem] xl:px-[14rem] pt-[50px]">
      <div className="h-full w-full overflow-hidden rounded-[35px]">
        <div className="w-full h-[65px] bg-[#D5D5D5] flex flex-row justify-around items-center font-poppins font-semibold text-base lg:pr-[17px]">
          <div className="flex-1 justify-center flex">
            <span>Nom</span>
          </div>
          <div className="flex-1 justify-center flex">
            <span>Sexe</span>
          </div>
          <div className="flex-1 justify-center flex">
            <span>Date De Naissance</span>
          </div>
          <div className="flex-1 justify-center flex">
            <span>N° dossart</span>
          </div>
        </div>
        <div className="h-full w-full overflow-y-scroll">
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
          <Participation />
          <Participation />
          <Participation />
          <Participation />
        </div>
      </div>
    </div>
  );
};
const Participation = () => (
  <div className="w-full h-[65px] bg-white flex flex-row justify-around items-center font-poppins font-semibold text-base">
    <div className="flex-1 justify-center flex text-center">
      <span>Ramzi Kaouachi</span>
    </div>
    <div className="flex-1 justify-center flex">
      <span>Sexe</span>
    </div>
    <div className="flex-1 justify-center flex">
      <span>Date De Naissance</span>
    </div>
    <div className="flex-1 justify-center flex">
      <span>N° dossart</span>
    </div>
  </div>
);
export default ParticipationsListDesktopView;
