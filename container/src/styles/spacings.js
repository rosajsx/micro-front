export const toRem = (number) => `${number / 10}rem`;

export const spacing = (number) => {
  const px = number * 8;

  return toRem(px);
};

/* 
  10px - 1 rem
  1px - Xrem

  10x = 1.1
  x = 1/10

*/
