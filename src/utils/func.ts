export function formatNumber(num: number): string {
  // Define the units and corresponding values
  const units = [
    { value: 1e9, symbol: "b" },
    { value: 1e6, symbol: "m" },
    { value: 1e3, symbol: "k" },
  ];

  // Loop through the units to find a match
  for (let i = 0; i < units.length; i++) {
    if (num >= units[i].value) {
      return (
        (num / units[i].value).toFixed(1).replace(/\.0$/, "") + units[i].symbol
      );
    }
  }

  // If no match, return the number as is
  return num.toString();
}

export function getRandomElements(arr: any[], num: number): any[] {
  // Shuffle the array
  const shuffled = arr.sort(() => 0.5 - Math.random());
  // Return the first `num` elements from the shuffled array
  return shuffled.slice(0, num);
}

export function shuffleArray(arr: any[]) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
