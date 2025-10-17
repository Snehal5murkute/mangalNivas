import { useEffect, useState } from "react";
import { content } from "../data/content";
import "../animation.css";

export default function TimerSection({ lang }) {
  const data = content[lang] || content.english;
  const timer = data.timer;

  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const eventDate = new Date(timer.eventDate).getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const diff = eventDate - now;

      if (diff > 0) {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft("started");
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [timer.eventDate]);

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="text-center mt-10 timer-box-animated">
        <h2 className="text-2xl font-bold text-[#8b4513]">{timer.heading}</h2>
        <div className="mt-4 text-1xl font-semibold">
          {timeLeft === "started" ? (
            <p>{timer.labels.started}</p>
          ) : (
            <p>
              {timeLeft.days} {timer.labels.days} : {timeLeft.hours} {timer.labels.hours} : {timeLeft.minutes} {timer.labels.minutes} : {timeLeft.seconds} {timer.labels.seconds}
            </p>
          )}
        </div>
      </div>
      <div className="flex justify-center items-center text-center mt-6 px-4">
        <p className="text-gray-700 text-lg md:text-xl font-medium">{timer.lastPara}</p>
      </div>
    </div>
  );
}
