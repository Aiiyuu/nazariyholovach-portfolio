import React, { useRef, useEffect, useState } from "react";
import "./Counter.scss";

type Props = {
  number: number;
  startFrom?: number;
  duration?: number;
  delay?: number;
};

export const Counter: React.FC<Props> = ({
  number,
  startFrom = 0,
  duration = 2,
  delay = 0,
}) => {
  const digitItemRef = useRef<HTMLSpanElement>(null);
  const [current, setCurrent] = useState(startFrom);

  const steps = Math.abs(number - startFrom);
  const interval = steps > 0 ? (duration * 1000) / steps : 0;

  useEffect(() => {
    let timer: ReturnType<typeof setInterval>;

    const start = () => {
      if (steps === 0) return;

      let value = startFrom;

      value = value < number ? value + 1 : value - 1;
      setCurrent(value);

      if (value === number) return;

      timer = setInterval(() => {
        value = value < number ? value + 1 : value - 1;
        setCurrent(value);

        if (value === number) {
          clearInterval(timer);
        }
      }, interval);
    };

    const delayTimeout = setTimeout(start, delay * 1000);

    return () => {
      clearTimeout(delayTimeout);
      clearInterval(timer);
    };
  }, [number, startFrom, steps, interval, delay]);

  const digitHeight = digitItemRef.current
    ? digitItemRef.current.getBoundingClientRect().height
    : 0;

  const len = Math.max(number.toString().length, startFrom.toString().length);

  const currentFormatted = current.toString().padStart(len, "0");

  return (
    <span className="counter" style={{ height: digitHeight }}>
      {Array.from({ length: len }).map((_, i) => {
        const digit = Number(currentFormatted[i]);
        const y = digitHeight * digit;

        return (
          <span
            key={i}
            className="counter__digit"
            style={{
              transform: `translateY(-${y}px)`,
              transition: `transform ${interval / 1000}s linear`,
            }}
          >
            {Array.from({ length: 10 }).map((_, j) => (
              <span
                key={j}
                className="counter__digit-item"
                ref={i === 0 && j === 0 ? digitItemRef : null}
              >
                {j}
              </span>
            ))}
          </span>
        );
      })}
    </span>
  );
};
