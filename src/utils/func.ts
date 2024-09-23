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
