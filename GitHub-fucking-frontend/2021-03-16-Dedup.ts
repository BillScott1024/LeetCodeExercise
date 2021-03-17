/**
 * Desc: 数据排重
 * 给定一个任意数组，实现一个通用函数，让数组中的数据根据 key 排重：
const dedup = (data, getKey = () => {} ) => {
  // todo
}
let data = [
  { id: 1, v: 1 },
  { id: 2, v: 2 },
  { id: 1, v: 1 },
];

// 以 id 作为排重 key，执行函数得到结果
// data = [
//   { id: 1, v: 1 },
//   { id: 2, v: 2 },
// ];

let data1 = [
  { id: 1, v: 1, id1: 1 },
  { id: 2, v: 2, id1: 2 },
  { id: 1, v: 1, id1: 1 },
]

// 以 id 和 id1 作为排重 key，执行函数得到结果
// data1 = [
//   { id: 1, v: 1, id1: 1 },
//   { id: 2, v: 2, id1: 2 },
// ];
 *
 * */


const dedup = (data: any[], getKey = (item: any): any => {}) => {
  const results = new Array();
  const map = new Map();
  data.forEach((dataItem) => {
    const key = getKey(dataItem);
    if (!map.has(key)) {
      map.set(key, dataItem);
    }
  });
  map.forEach((item) => {
    results.push(item);
  });
  return results;
}

let data = [
  { id: 1, v: 1 },
  { id: 2, v: 2 },
  { id: 1, v: 1 },
];

let data1 = [
  { id: 1, v: 1, id1: 1 },
  { id: 2, v: 2, id1: 2 },
  { id: 1, v: 1, id1: 1 },
];

// const res = dedup(data, (item) => item.id);
// console.log(res);

// const res1 = dedup(data1, (item) => `${item.id}+${item.id1}`);
// console.log(res1);