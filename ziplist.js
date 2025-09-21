"use strict";
/* eslint-disable @typescript-eslint/indent */
function zipList(arr1, arr2) {
    const zipped = [];
    for (let i = 0; i < arr1.length; i++) {
        zipped.push(arr1[i], arr2[i]);
    }
    return zipped;
}
function zipListTheFunctionalWay(arr1, arr2) {
    const zipped = [];
    arr1.forEach((element, index) => {
        zipped.push(element, arr2[index]);
    });
    return zipped;
}
console.log(zipList(['a', 'b', 'c'], [1, 2, 3]));
console.log(zipListTheFunctionalWay(['a', 'b', 'c'], [1, 2, 3]));
