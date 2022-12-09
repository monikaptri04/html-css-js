function median(arr) {
    const arrSorted = arr.sort((a, b) => a - b);
    return arrSorted.length % 2 === 0 ? (arrSorted[arrSorted.length/2 - 1] + arrSorted[arrSorted.length/2]) / 2 : arrSorted[Math.floor(arrSorted.length/2)];
}
const data = [8, 7, 7, 9, 5, 4, 2, 9];

console.log('Data: ${data}');
console.log('Median: ${median(data)}');