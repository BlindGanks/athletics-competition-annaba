import { useEffect, useState } from "react";

const timeDiffCalc = (dateFuture, dateNow) => {
  let diffInMilliSeconds = Math.abs(dateFuture - dateNow) / 1000;

  // calculate days
  const days = Math.floor(diffInMilliSeconds / 86400);
  diffInMilliSeconds -= days * 86400;

  // calculate hours
  const hours = Math.floor(diffInMilliSeconds / 3600) % 24;
  diffInMilliSeconds -= hours * 3600;

  // calculate minutes
  const minutes = Math.floor(diffInMilliSeconds / 60) % 60;
  diffInMilliSeconds -= minutes * 60;

  let difference = {};

  difference.days = days;
  difference.hours = hours;
  difference.minutes = minutes;

  return difference;
};

const MILLIS_IN_SECOND = 1000;

const Countdown = ({ competitionDate }) => {
  const [remainingTime, setRemainingTime] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });
  useEffect(() => {
    let interval,
      difference,
      isCanceled = false;
    async function startTimer() {
      if (!competitionDate) return;

      if (isCanceled) return;

      interval = setInterval(() => {
        const today = new Date();
        difference = timeDiffCalc(competitionDate, today);
        difference.seconds =
          60 - today.getSeconds() === 60 ? 0 : 60 - today.getSeconds();
        setRemainingTime(difference);
      }, MILLIS_IN_SECOND);
    }
    startTimer();
    return () => {
      isCanceled = true;
      clearInterval(interval);
    };
  }, [competitionDate]);

  return (
    <div className="flex flex-row justify-between">
      <Timer text="Days" time={remainingTime.days} />
      <Timer text="Hours" time={remainingTime.hours} />
      <Timer text="Minutes" time={remainingTime.minutes} />
      <Timer text="Seconds" time={remainingTime.seconds} />
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
