export const getRomanNumeral = (num: number) => {
  const romanValues = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };
  let roman = "";
  for (const key in romanValues) {
    //@ts-ignore
    while (num >= romanValues[key]) {
      roman += key;
      //@ts-ignore
      num -= romanValues[key];
    }
  }
  return roman;
};
