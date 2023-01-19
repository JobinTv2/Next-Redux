import { useState } from 'react';

export const useGetTimeHook: () => Array<string | undefined> = () => {
  const getCurrentTime: () => string = () => {
    const date = new Date();
    return `${date.getHours()}H: ${date.getMinutes()}M`;
  };

  const [time, setTime] = useState<string>();

  setTimeout(() => {
    setTime(getCurrentTime());
  }, 1000);

  return [time];
};
