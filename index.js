import mergeSort from "./sorting/mergeSort.js";
import quickSort from "./sorting/quickSort.js";

const arr = [0, 4, 7, 2, 8, 1];

console.time("Quick");
console.log("Quick Sort: " + quickSort(arr));
console.timeEnd("Quick");

console.time("Merge");
console.log("Merge Sort: " + mergeSort(arr));
console.timeEnd("Merge");
