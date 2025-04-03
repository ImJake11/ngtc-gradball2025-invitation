import { useEffect, useState } from "react";

export default function Countdown() {
  const targetDate = new Date("2025-05-09T15:00:00"); // Target date: May 9, 2025 at 3:00 PM

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const timeDiff = targetDate.getTime() - now.getTime();

      if (timeDiff <= 0) {
        clearInterval(interval); // Stop the countdown once the target date is reached
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval); // Cleanup the interval when the component is unmounted
  }, []);

  return (
    <div className="text-center p-4">
      <h1 className="text-xl font-bold mb-4">
        Countdown to May 9, 2025, 3:00 PM
      </h1>
      <div className="text-2xl">
        <span>{timeLeft.days} Days </span>
        <span>{timeLeft.hours} Hours </span>
        <span>{timeLeft.minutes} Minutes </span>
        <span>{timeLeft.seconds} Seconds </span>
      </div>
    </div>
  );
}
