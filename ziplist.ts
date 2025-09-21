/** E27: Five problems every software engineer should be able to solve (Part 2)
 * Estimated time: 10 minutes
 * Actual time: 12 minutes
 *
 * Reflection: This was more of an issue of getting it to run correctly than it was to put together the functions.
 */

/* eslint-disable @typescript-eslint/indent */
function zipList(arr1: unknown[], arr2: unknown[]): unknown[] {
    const zipped: unknown[] = [];

    for (let i = 0; i < arr1.length; i++) {
        zipped.push(arr1[i], arr2[i]);
    }

    return zipped;
}

function zipListTheFunctionalWay(arr1: unknown[], arr2: unknown[]): unknown[] {
    const zipped: unknown[] = [];
    arr1.forEach((element, index) => {
        zipped.push(element, arr2[index]);
    });
    return zipped;
}

console.log(zipList(['a', 'b', 'c'], [1, 2, 3]));
console.log(zipListTheFunctionalWay(['a', 'b', 'c'], [1, 2, 3]));
