const Contact = ({ icon, title = "", content }) => {
  return (
    <div className="relative w-full bg-white text-center pt-8 pb-5 px-4 2xl:h-[232px] 2xl:max-w-[456px] 2xl:pt-14">
      <div className="bg-redPrimary rounded-full w-[46px] h-[45px] absolute -top-[22.5px] right-1/2 translate-x-1/2 p-[10px] flex items-center justify-center 2xl:w-[74px] 2xl:h-[74px] 2xl:-top-[37px]">
        <div className="w-6 h-6 flex items-center justify-center 2xl:w-8 2xl:h-8">
          {icon}
        </div>
      </div>
      <span className="font-futura font-normal text-lg text-redPrimary uppercase 2xl:text-2xl 2xl:mb-7">
        {title}
      </span>
      <div className="font-helvetica font-normal text-lg flex flex-col 2xl:text-[22px]">
        {content}
      </div>
    </div>
  );
};

export default Contact;
