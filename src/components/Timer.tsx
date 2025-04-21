
import { useState, useEffect } from "react";
import { Progress } from "@/components/ui/progress";

interface TimerProps {
  duration: number; // Duration in seconds
  onComplete?: () => void;
}

export function Timer({ duration, onComplete }: TimerProps) {
  const [timeLeft, setTimeLeft] = useState(duration);
  const [isActive, setIsActive] = useState(true);
  
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  
  const progress = ((duration - timeLeft) / duration) * 100;

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    
    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0 && onComplete) {
      onComplete();
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isActive, timeLeft, onComplete]);

  return (
    <div className="w-full space-y-2">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium">Time Remaining</h3>
        <span className="text-xl font-bold">
          {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
        </span>
      </div>
      <Progress value={progress} className="h-2" />
    </div>
  );
}
