export const daysLeft = (deadline: string): number => {
  const difference = new Date(deadline).getTime() - Date.now();
  const remainingDays = difference / (1000 * 3600 * 24);

  return Math.floor(remainingDays);
};

export const calculateBarPercentage = (
  goal: number,
  raisedAmount: number
): number => {
  const percentage = Math.round((raisedAmount * 100) / goal);

  return percentage;
};

export const checkIfImage = (
  url: string,
  callback: (isImage: boolean) => void
): void => {
  const img = new Image();
  img.src = url;

  if (img.complete) {
    callback(true);
    return;
  }

  img.onload = () => callback(true);
  img.onerror = () => callback(false);
};
