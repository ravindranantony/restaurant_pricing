export const calculatePrice = (basePrice: number): number => {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const time = hours + minutes / 60;

  if (time >= 18 && time < 19) {
    return Math.round(basePrice * 1.10); // 10% increase
  } else if (time >= 19 && time < 20) {
    return Math.round(basePrice * 1.14); // 14% increase
  } else if (time >= 20 && time < 21.5) {
    return Math.round(basePrice * 1.125); // 12.5% increase
  }
  
  return basePrice;
};