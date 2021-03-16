/**
 * Desc: 实现一个 chunk 函数
 * Date: 2021-03-15
 * Author: Akimto
 *
 * @param input
 * @param size
 * @returns {Array}
    _.chunk(['a', 'b', 'c', 'd'], 2)
    // => [['a', 'b'], ['c', 'd']]

    _.chunk(['a', 'b', 'c', 'd'], 3)
    // => [['a', 'b', 'c'], ['d']]

    _.chunk(['a', 'b', 'c', 'd'], 5)
    // => [['a', 'b', 'c', 'd']]

    _.chunk(['a', 'b', 'c', 'd'], 0)
    // => []
 */

/**
 * 
 * @param array 数组
 * @param size 分块大小
 * @returns 返回新结果数组
 */
const chunk = (array: any[], size: number) => {
    if (!Array.isArray(array)) {
        return [];
    }
    if (array.length == 0) {
        return [];
    }
    let resultArray = [];
    let resultIndex = 0;
    let currentIndex = 0;
    while (currentIndex < array.length) {
        resultArray[resultIndex] = array.slice(currentIndex, currentIndex + size);
        resultIndex++;
        currentIndex += size;
    }
    return resultArray;
}

// const res = chunk(['a', 'b', 'c', 'd'], 2);
// console.log(res);