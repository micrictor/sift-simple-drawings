import { Button } from "@mui/material";
import { useEffect, useState } from "react";

interface TimerProps {
    timerLength: number;
    doneFn: () => void;
}

export function Timer({ timerLength, doneFn }: TimerProps) {
    const [secondsLeft, setSecondsLeft] = useState(timerLength);

    useEffect(() => {
        let intervalId: number | null = null;
        if (secondsLeft > 0) {
          intervalId = window.setInterval(() => {
            setSecondsLeft(secondsLeft - 1);
          }, 1000);
        } else {
            doneFn();
        }
        return () => {
          if (intervalId !== null) {
            clearInterval(intervalId);
          }
        };
    }, [secondsLeft]);

    return (
        <div>
            0:{secondsLeft.toString().padStart(2, '0')}
        </div>
    )
}