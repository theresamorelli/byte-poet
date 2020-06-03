// function getRandomWords(words: string[], num: number) {
//   if (num > words.length) console.log('Too many words requested');
//   const randomWords = [];
//   while ()
// }

// export { getRandomWords };

export const getNumWords = (width: number, height: number) => {
  const area = width * height;
  return Math.floor(area / 10000);
};
